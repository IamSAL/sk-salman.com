function getCurrentTime(): string {
  const currentDate = new Date()
  const options: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit", hour12: true }

  const timeString = new Intl.DateTimeFormat("en-US", options).format(currentDate)

  return timeString
}

export const DateTimeUtil = { getCurrentTime }
