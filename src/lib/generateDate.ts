interface DateTimeInfo {
  date: string;
  day: string;
  month: string;
  year: string;
  hour: string;
  minutes: string;
}

export const getDateTimeInfo = (value: string): DateTimeInfo => {
  const now = new Date(value);

  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
    weekday: "long",
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const date = now.toLocaleDateString(undefined, dateOptions);
  const day = now.toLocaleDateString(undefined, { weekday: "long" });
  const month = now.toLocaleDateString(undefined, { month: "long" });
  const year = now.toLocaleDateString(undefined, { year: "numeric" });
  const hour = now.toLocaleTimeString(undefined, timeOptions);
  const minutes = now.toLocaleTimeString(undefined, { minute: "2-digit" });

  return {
    date,
    day,
    month,
    year,
    hour,
    minutes,
  };
};
