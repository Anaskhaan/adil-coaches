import { FleetBanner } from "../components/Fleet/FleetBanner";
import { FleetList } from "../components/Fleet/FleetList";

export const Fleet = () => {
  return <div className="py-10">
    <FleetBanner />
    <FleetList />
  </div>;
};
