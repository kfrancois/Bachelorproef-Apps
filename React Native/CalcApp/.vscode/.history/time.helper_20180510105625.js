export const time = cb => {
  const start = new Date().getTime();
  cb();
  const time = new Date().getTime() - start;
  this.setState({ time });
};
