interface BatteryType {
  charges: {
    value: number;
    created_at: string;
  }[];
  current_level: number;
  health: number;
}

export default BatteryType;
