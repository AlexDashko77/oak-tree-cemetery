export const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, ""); 
    const match = numbers.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/);

    if (!match) return value;

    return !match[2]
      ? `+${match[1]}`
      : `+${match[1]} (${match[2]})${match[3] ? ` ${match[3]}` : ""}`;
  };

export const formatPhoneNumber = (phoneNumber: string) => {
    if (/^\d{11}$/.test(phoneNumber)) {
        return `+${phoneNumber[0]} ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7)}`;
    }
}

export const checkEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email)
    
}