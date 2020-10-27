export interface WindowInterface {
  id: number;
  height: number;
  width: number;
  name: string;
  controls: [ControlsInterface];
  designId: number;
  type: string;
}

export interface ControlsInterface {
  id: number;
  name: string;
  type: string;
  attributes: {
    id: number;
    cols: string;
    style: string;
  };
  options: object;
  tag: string;
}