import { Job } from "./Job";

export interface AppRoutesProp {
  listOfJobs: Array<Job>;
  handleLogin: () => void;
}
