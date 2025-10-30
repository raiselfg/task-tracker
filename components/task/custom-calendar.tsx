'use client';

import * as React from 'react';
import { CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { addDays } from 'date-fns';

interface CustomCalendarProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  disabled?: boolean;
}

function formatDate(date: Date | undefined) {
  if (!date) {
    return '';
  }

  return date.toLocaleDateString('en-EN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

export function CustomCalendar({
  value,
  onChange,
  disabled,
}: CustomCalendarProps) {
  const [open, setOpen] = React.useState(false);
  const [month, setMonth] = React.useState<Date | undefined>(value);
  const [inputValue, setInputValue] = React.useState(formatDate(value));

  // Синхронизация значения из формы
  React.useEffect(() => {
    setInputValue(formatDate(value));
    setMonth(value);
  }, [value]);

  const handleDateSelect = (date: Date | undefined) => {
    setInputValue(formatDate(date));
    onChange?.(date);
    setOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue === '') {
      setInputValue('');
      onChange?.(undefined);
      return;
    }

    const date = new Date(trimmedValue);
    if (isValidDate(date)) {
      const minDate = addDays(new Date(), 2);
      if (date >= minDate) {
        onChange?.(date);
        setInputValue(formatDate(date));
        setMonth(date);
      } else {
        // Сброс к предыдущему значению, если дата меньше минимальной
        setInputValue(formatDate(value));
      }
    } else {
      // Сброс к предыдущему значению, если дата некорректна
      setInputValue(formatDate(value));
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="relative flex gap-2">
        <Input
          id="date"
          value={inputValue}
          placeholder="June 01, 2025"
          className="bg-background pr-10"
          onChange={handleInputChange}
          onBlur={handleBlur}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              setOpen(true);
            }
          }}
          disabled={disabled}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild disabled={disabled}>
            <Button
              id="date-picker"
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
              type="button"
            >
              <CalendarIcon className="size-3.5" />
              <span className="sr-only">Select date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0"
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode="single"
              selected={value}
              captionLayout="dropdown"
              disabled={{
                before: addDays(new Date(), 2),
              }}
              month={month}
              onMonthChange={setMonth}
              onSelect={handleDateSelect}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
