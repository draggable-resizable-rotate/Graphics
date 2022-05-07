export type CanWritable<T> = {
  -readonly [k in keyof T]: T[k]
};

export enum PointOnLineEquation {
  On = 'on',
  Down = 'down',
  Up = 'up',
}

export interface Position {
  left: number;
  top: number;
}

export interface Point {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number
}


export interface MatrixType {
  translateX: number,
  translateY: number,
  rotate: number,
  skew: number,
  scaleX: number,
  scaleY: number
}

export type ElementRect = CanWritable<Omit<DOMRect, 'toJSON'>>;

export interface LineEquation {
  A: number;
  B: number;
  C: number;
}

// 顶角方向
export type ApexAngleDirection  = 'topRight'
| 'bottomRight'
| 'bottomLeft'
| 'topLeft';;

// 四边方向
export type LineDirection = 'top'
| 'right'
| 'bottom'
| 'left';

export type Direction = ApexAngleDirection | LineDirection;

export type DirectionType = 'apex-angle' | 'line';
