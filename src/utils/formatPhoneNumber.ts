export const formatPhoneNumber = (phone: string): string => {
  if (phone.length !== 11) {
    return phone;
  }

  const country = phone.slice(0, 1);
  const code = phone.slice(1, 4);
  const part1 = phone.slice(4, 7);
  const part2 = phone.slice(7, 9);
  const part3 = phone.slice(9, 11);

  return `+${country} (${code}) ${part1}-${part2}-${part3}`;
};
