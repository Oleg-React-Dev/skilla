export const getInitials = (name?: string, surname?: string) => {
  let initials = "";

  if (name) {
    initials += name[0].toUpperCase();
  }

  if (surname) {
    initials += surname[0].toUpperCase();
  }

  return initials;
};
