import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface DataStreamProps {
  index?: number;
  variant?: 'coordinates' | 'operations' | 'partnerships';
}

export function TacticalDataStream({ index = 0, variant = 'coordinates' }: DataStreamProps) {
  const [data, setData] = useState<any>({});

  // Random position for each stream - allow more overlap
  const randomPosition = useMemo(() => ({
    top: `${25 + Math.random() * 50}%`,
    left: `${15 + Math.random() * 70}%`,
  }), []);

  // Random rotation for variety
  const randomRotation = useMemo(() => Math.random() * 6 - 3, []);

  // Different green tints per variant
  const colorScheme = useMemo(() => {
    switch (variant) {
      case 'coordinates':
        return {
          bg: '#1a2412',
          border: '#4a5b2f',
          text: '#6a7f4c',
          accent: '#8a9f6c',
        };
      case 'operations':
        return {
          bg: '#1a1f12',
          border: '#5a6b3f',
          text: '#7a8f5c',
          accent: '#9aaf7c',
        };
      case 'partnerships':
        return {
          bg: '#1a1e16',
          border: '#4f6043',
          text: '#6f8060',
          accent: '#8fa080',
        };
      default:
        return {
          bg: '#1a1f12',
          border: '#5a6b3f',
          text: '#7a8f5c',
          accent: '#9aaf7c',
        };
    }
  }, [variant]);

  useEffect(() => {
    const updateData = () => {
      if (variant === 'coordinates') {
        setData({
          lat: (52.0907 + (Math.random() - 0.5) * 0.01).toFixed(6),
          lon: (5.1214 + (Math.random() - 0.5) * 0.01).toFixed(6),
          elevation: `${40 + Math.floor(Math.random() * 10)}M`,
          bearing: `${Math.floor(Math.random() * 360).toString().padStart(3, '0')}°`,
          timestamp: new Date().toISOString().split('T')[1].split('.')[0],
        });
      } else if (variant === 'operations') {
        const missions = ['HUMANITARIAN', 'RECONSTRUCTION', 'STABILIZATION', 'LIAISON', 'ASSESSMENT'];
        const statuses = ['ACTIVE', 'PENDING', 'COMPLETE', 'IN-PROGRESS'];
        const priorities = ['HIGH', 'MEDIUM', 'LOW', 'CRITICAL'];
        setData({
          mission: missions[Math.floor(Math.random() * missions.length)],
          status: statuses[Math.floor(Math.random() * statuses.length)],
          priority: priorities[Math.floor(Math.random() * priorities.length)],
          units: Math.floor(Math.random() * 50) + 10,
          progress: Math.floor(Math.random() * 100),
        });
      } else {
        const actors = ['NGO', 'LOCAL GOV', 'INTL ORG', 'CIVILIAN', 'VOLUNTEER'];
        const sectors = ['HEALTH', 'EDUCATION', 'INFRASTRUCTURE', 'SECURITY', 'AID'];
        setData({
          actor: actors[Math.floor(Math.random() * actors.length)],
          sector: sectors[Math.floor(Math.random() * sectors.length)],
          contacts: Math.floor(Math.random() * 20) + 5,
          coordination: Math.floor(Math.random() * 100),
          active: Math.floor(Math.random() * 15) + 1,
        });
      }
    };

    updateData();
    const interval = setInterval(updateData, 200 + Math.random() * 300);
    return () => clearInterval(interval);
  }, [variant]);

  const getHeaderLabel = () => {
    switch (variant) {
      case 'coordinates': return 'POSITION INTEL';
      case 'operations': return 'MISSION STATUS';
      case 'partnerships': return 'CIVIL LIAISON';
      default: return 'DATA STREAM';
    }
  };

  const getStatusCode = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const prefixes = ['CMC', 'CIV', 'MIL', 'OPS', 'LNK'];
    return `${prefixes[index % prefixes.length]}-${letters[Math.floor(Math.random() * letters.length)]}${Math.floor(Math.random() * 9) + 1}`;
  };

  return (
    <div 
      className="absolute hidden lg:block"
      style={{ 
        top: randomPosition.top, 
        left: randomPosition.left,
        transform: `translate(-50%, -50%) rotate(${randomRotation}deg)`
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 + index * 0.15 }}
        className="backdrop-blur-2xl rounded-lg p-8 min-w-[550px] shadow-2xl opacity-12 blur-[1.5px]"
        style={{
          backgroundColor: `${colorScheme.bg}12`,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: `${colorScheme.border}20`,
        }}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between mb-4 pb-3 border-b"
          style={{ borderColor: `${colorScheme.border}25` }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 bg-[#f7941d] rounded-full animate-pulse" />
            <span 
              className="text-[13px] uppercase tracking-wider"
              style={{ color: colorScheme.text }}
            >
              {getHeaderLabel()}
            </span>
          </div>
          <span className="text-[#f7941d] text-[13px] font-mono">{getStatusCode()}</span>
        </div>

        {/* Data rows */}
        <div className="space-y-2.5 font-mono text-[13px]">
          {variant === 'coordinates' && (
            <>
              <DataRow label="LAT" value={data.lat} colorScheme={colorScheme} />
              <DataRow label="LON" value={data.lon} colorScheme={colorScheme} />
              <DataRow label="ELV" value={data.elevation} colorScheme={colorScheme} />
              <DataRow label="BRG" value={data.bearing} colorScheme={colorScheme} />
              <DataRow label="UTC" value={data.timestamp} colorScheme={colorScheme} />
            </>
          )}
          {variant === 'operations' && (
            <>
              <DataRow label="TYPE" value={data.mission} colorScheme={colorScheme} />
              <DataRow label="STAT" value={data.status} colorScheme={colorScheme} />
              <DataRow label="PRIO" value={data.priority} colorScheme={colorScheme} />
              <DataRow label="UNIT" value={`${data.units} PERS`} colorScheme={colorScheme} />
              <DataRow label="PROG" value={`${data.progress}%`} colorScheme={colorScheme} />
            </>
          )}
          {variant === 'partnerships' && (
            <>
              <DataRow label="ACTR" value={data.actor} colorScheme={colorScheme} />
              <DataRow label="SCTR" value={data.sector} colorScheme={colorScheme} />
              <DataRow label="CTCT" value={`${data.contacts} LINK`} colorScheme={colorScheme} />
              <DataRow label="COOR" value={`${data.coordination}%`} colorScheme={colorScheme} />
              <DataRow label="LIVE" value={`${data.active} ACT`} colorScheme={colorScheme} />
            </>
          )}
        </div>

        {/* Footer */}
        <div 
          className="mt-4 pt-3 border-t"
          style={{ borderColor: `${colorScheme.border}25` }}
        >
          <div className="flex items-center justify-between">
            <span 
              className="text-[11px] uppercase tracking-wider"
              style={{ color: colorScheme.text }}
            >
              {variant === 'coordinates' ? 'GPS Link' : variant === 'operations' ? 'Ops Net' : 'Civ Net'}
            </span>
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                  className="w-1 h-3 bg-[#f7941d] rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function DataRow({ label, value, colorScheme }: { label: string; value: string; colorScheme: any }) {
  return (
    <div className="flex items-center justify-between">
      <span 
        className="uppercase tracking-wider"
        style={{ color: colorScheme.text }}
      >
        {label}:
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={value}
          initial={{ opacity: 0, x: -3 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 3 }}
          transition={{ duration: 0.1 }}
          className="text-[#f7941d] tabular-nums"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

