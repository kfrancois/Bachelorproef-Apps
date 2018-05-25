const time = cb => {
  const start = new Date().getTime();
  cb();
  const time = new Date().getTime() - start;
  return time;
};

export default time;
