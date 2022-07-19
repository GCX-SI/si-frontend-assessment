interface SensorType {
  title: string;
  sensor_type: string;
  id: string;
  levels: Array<{ value: number; created_at: string }>;
}

export default SensorType;
