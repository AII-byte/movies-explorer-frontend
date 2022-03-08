export const transformFilmDuration = (duration) => {
  if (duration < 60) {
    return `${duration}м`
  }
  return `${(duration/60).toFixed()}ч${duration%60}м`
}
