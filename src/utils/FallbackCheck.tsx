
function FallbackCheckString(...args: string[]) {
  let result = true;
  args.forEach(element => {
    if (!element) {
      result = false;
    }
  });
  return result;
}

export default FallbackCheckString;