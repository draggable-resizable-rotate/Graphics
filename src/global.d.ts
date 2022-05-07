declare namespace Global {
  type CanWritable<T> = {
    -readonly [k in keyof T]: T[k]
  };

  enum PointOnLineEquation {
    On = 'on',
    Down = 'down',
    Up = 'up',
  }

  interface Position {
    left: number;
    top: number;
  }

  interface Point {
    x: number;
    y: number;
  }

  interface Size {
    width: number;
    height: number
  }


  interface MatrixType {
    translateX: number,
    translateY: number,
    rotate: number,
    skew: number,
    scaleX: number,
    scaleY: number
  }

  type ElementRect = CanWritable<Omit<DOMRect, 'toJSON'>>;

  interface LineEquation {
    A: number;
    B: number;
    C: number;
  }

  // 顶角方向
  type ApexAngleDirection  = 'topRight'
  | 'bottomRight'
  | 'bottomLeft'
  | 'topLeft';;

  // 四边方向
  type LineDirection = 'top'
  | 'right'
  | 'bottom'
  | 'left';

  type Direction = ApexAngleDirection | LineDirection;

  type DirectionType = 'apex-angle' | 'line';
}
