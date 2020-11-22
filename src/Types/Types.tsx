export type timerType = {
  hour: number;
  minute: number;
  second: number;
};
export type Hour = number;
export type action = () => void;
export type button = {
  title: string;
  click?: () => void;
  disable: boolean;
};
