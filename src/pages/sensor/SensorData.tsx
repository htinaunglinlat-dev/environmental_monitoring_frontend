import LedControlSection from "./LedControlSection";
import SensorValueSection from "./SensorValueSection";

const SensorData = () => {
  return (
    <div className="p-4">
      <LedControlSection />
      <SensorValueSection />
    </div>
  );
};

export default SensorData;