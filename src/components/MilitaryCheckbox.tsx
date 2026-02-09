import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "./ui/utils";

interface MilitaryCheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  variant?: 'orange' | 'green';
}

export function MilitaryCheckbox({ 
  className, 
  variant = 'orange',
  checked,
  ...props 
}: MilitaryCheckboxProps) {
  const colors = {
    orange: {
      border: '#f7941d',
      glow: '#f7941d',
      bg: 'rgba(247, 148, 29, 0.15)'
    },
    green: {
      border: '#5a6b3f',
      glow: '#5a6b3f',
      bg: 'rgba(90, 107, 63, 0.15)'
    }
  };

  const color = colors[variant];
  const isChecked = checked === true || checked === 'indeterminate';

  return (
    <div className="relative">
      {/* Outer hexagonal glow effect */}
      {isChecked && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 blur-sm"
          style={{
            background: color.glow,
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          }}
        />
      )}

      {/* Main checkbox */}
      <CheckboxPrimitive.Root
        checked={checked}
        className={cn(
          "peer relative size-5 shrink-0 transition-all duration-300 outline-none group",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        style={{
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
        }}
        {...props}
      >
        {/* Background layer */}
        <div 
          className="absolute inset-0 transition-all duration-300"
          style={{
            backgroundColor: isChecked ? color.bg : 'rgba(0, 0, 0, 0.6)',
            border: `2px solid ${isChecked ? color.border : '#444'}`,
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          }}
        />

        {/* Corner accents */}
        <div className="absolute inset-0 opacity-40">
          <div 
            className="absolute top-0 left-[30%] w-[40%] h-[2px]"
            style={{ backgroundColor: color.border }}
          />
          <div 
            className="absolute bottom-0 left-[30%] w-[40%] h-[2px]"
            style={{ backgroundColor: color.border }}
          />
        </div>

        {/* Animated scanline effect */}
        {isChecked && (
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 w-full h-[2px] opacity-50 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, transparent, ${color.glow}, transparent)`,
            }}
          />
        )}

        {/* Check indicator */}
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current absolute inset-0 z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 25 
            }}
          >
            <Check 
              className="w-3.5 h-3.5 drop-shadow-lg" 
              style={{ color: color.border, strokeWidth: 3 }}
            />
          </motion.div>
        </CheckboxPrimitive.Indicator>

        {/* Pulse effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 pointer-events-none"
          animate={isChecked ? { 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0, 0.3]
          } : {}}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            backgroundColor: color.glow,
            filter: 'blur(4px)',
          }}
        />
      </CheckboxPrimitive.Root>

      {/* Tactical corner brackets */}
      {isChecked && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 pointer-events-none"
            style={{ borderColor: color.border }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 pointer-events-none"
            style={{ borderColor: color.border }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 pointer-events-none"
            style={{ borderColor: color.border }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 pointer-events-none"
            style={{ borderColor: color.border }}
          />
        </>
      )}
    </div>
  );
}

