export class DateService {
  static getToday() {
    return new Date();
  }

  static getTodayRange() {
    return {
      startDate: this.getToday(),
      endDate: this.getToday(),
    }
  };

  static getYesterdayRange() {
    const today = this.getToday();
    const startDate = new Date().setDate(today.getDate() - 1);

    return {
      startDate: new Date(startDate),
      endDate: new Date(startDate),
    }
  };

  static getLastSevenDaysRange() {
    const today = this.getToday();
    const startDate = new Date().setDate(today.getDate() - 7);

    return {
      startDate: new Date(startDate),
      endDate: today,
    }
  };

  static getLastThitryDaysRange() {
    const today = this.getToday();
    const startDate = new Date().setDate(today.getDate() - 30);

    return {
      startDate: new Date(startDate),
      endDate: today,
    }
  };

  static getThisMonthRange() {
    const today = this.getToday();
    const startDate = new Date(today.getFullYear(), today.getMonth(), 1);

    return {
      startDate: startDate,
      endDate: today,
    }
  };

  static getThisYearRange() {
    const today = this.getToday();
    const startDate = new Date(today.getFullYear(), 0, 1);

    return {
      startDate: startDate,
      endDate: today,
    }
  };

  static getLifeTimeRange() {
    const startDate = new Date(2017, 3, 4);

    return {
      startDate: startDate,
      endDate: this.getToday(),
    }
  };
}
