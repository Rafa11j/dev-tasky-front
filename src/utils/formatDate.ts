import dayjs from 'dayjs';

export const formatDateToInput = (date: Date): string => {
  return dayjs(date).format('YYYY-MM-DD');
};

export const formatDate = (date: Date): string => {
  return dayjs(date).format('DD/MM/YYYY');
};
