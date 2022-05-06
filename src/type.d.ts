
import { getRelativePoint } from './positionCalculate'

declare namespace Graphics {
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

  type getElementDocumentRect = (element: HTMLElement, position: Position) => ElementRect

  type getRelativePoint = (
    relativePoint: Point,
    freePoint: Point,
  ) => Point

  type Line = {
    getLineEquation: (pointOne: Point, pointTwo: Point) => LineEquation;
    getPointToLineDistance: (point: Point, lineEquation: LineEquation) => number;
    get2LineIntersectionPoint: (
      firstLineEquation: LineEquation,
      secondLineEquation: LineEquation,
    ) => Point;
    pointOnLineEquation: (point: Point, lineEquation: LineEquation) => PointOnLineEquation;
    get2PointDistance: (
      firstPoint: Point,
      secondPoint: Point,
    ) => number;
    getLineEquationByRotateAndPoint: (
      passPoint: Point,
      rotate: number,
    ) => LineEquation;
  }

  type Rect = {
    drawRect: (point: Point, size: Size) => ElementRect;
    getPointRotateByOrigin: (point: Point, origin: Point, angle: number) => Point;
    getAnglePI: (angle: number) => number;
    getRotateRectPoints: (rect: Size & Position, angle: number) => {
      [key in Direction]: Point;
    };
    RECT_DIRECT: Direction [];
    RECT_LINE_DIRECTION: LineDirection [];
    RECT_APEX_ANGLE_DIRECTION: ApexAngleDirection [];
    getOppositeDirection: (direction: Direction) => {
      oppositeIndex: number;
      currentIndex: number;
    };
    getValidDirectionIndex: (index: number) => number;
  }
}


export = Graphics
