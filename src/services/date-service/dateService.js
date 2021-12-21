import {DECREMENT, INCREMENT} from "../../constants/date-operators";

export class DateService {
  static getDaysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  static getPrevOrNextMonth(date, operator, double) {
    const count = double ? 2 : 1;

    if (operator === INCREMENT) {
      return new Date(date.getFullYear(), date.getMonth() + count, 1);
    } else if (operator === DECREMENT) {
      return new Date(date.getFullYear(), date.getMonth() - count, 1);
    }
  }

  static getDay(date, day_number) {
    return new Date(date.getFullYear(), date.getMonth(), day_number);
  }

  static getToday() {
    const today = new Date();
    today.setHours(0,0,0,0);

    return today;
  }

  static getTodayRange() {
    return {
      startDate: this.getToday(),
      endDate: this.getToday(),
    }
  };

  static getYesterdayRange() {
    const today = this.getToday();
    const startDate = today.setDate(today.getDate() - 1);

    return {
      startDate: new Date(startDate),
      endDate: new Date(startDate),
    }
  };

  static getLastSevenDaysRange() {
    const interDate = this.getToday();
    const startDate = interDate.setDate(interDate.getDate() - 7);

    return {
      startDate: new Date(startDate),
      endDate: this.getToday(),
    }
  };

  static getLastThitryDaysRange() {
    const interDate = this.getToday();
    const startDate = interDate.setDate(interDate.getDate() - 30);

    return {
      startDate: new Date(startDate),
      endDate: this.getToday(),
    }
  };

  static getThisMonthRange() {
    const interDate = this.getToday();
    const startDate = new Date(interDate.getFullYear(), interDate.getMonth(), 1);
    startDate.setHours(0,0,0,0);

    return {
      startDate: startDate,
      endDate: this.getToday(),
    }
  };

  static getThisYearRange() {
    const interDate = this.getToday();
    const startDate = new Date(interDate.getFullYear(), 0, 1);
    startDate.setHours(0,0,0,0);

    return {
      startDate: startDate,
      endDate: this.getToday(),
    }
  };

  static getLifeTimeRange() {
    const startDate = new Date(2017, 3, 4);
    startDate.setHours(0,0,0,0);

    return {
      startDate: startDate,
      endDate: this.getToday(),
    }
  };
}
