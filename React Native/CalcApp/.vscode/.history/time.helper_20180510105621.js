export const time = cb => {
  const start = new Date().getTime();
  const time = new Date().getTime() - start;
  this.setState({ time });
};
