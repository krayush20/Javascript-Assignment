function getDaysInMonth(month, year) {
    // Months are zero-based, so we subtract 1 from the provided month
    const date = new Date(year, month - 1, 1);
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);
    return date.getDate();
  }
  
  // Example usage
  const month = 5; // June
  const year = 2023;
  
  const daysInMonth = getDaysInMonth(month, year);
  console.log(`Number of days in ${month}/${year}: ${daysInMonth}`);