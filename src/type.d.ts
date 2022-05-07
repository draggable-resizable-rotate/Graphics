type Position = Global.Position
type ElementRect = Global.ElementRect
type Point = Global.Point
type MatrixType = Global.MatrixType
type LineEquation = Global.LineEquation
type PointOnLineEquation = Global.PointOnLineEquation;
type Size = Global.Size;
type Direction = Global.Direction;
type LineDirection = Global.LineDirection;
type ApexAngleDirection = Global.ApexAngleDirection;

declare namespace Graphics {
  function getElementDocumentRect(element: HTMLElement, position: Position): ElementRect

  function getRelativePoint(
    relativePoint: Point,
    freePoint: Point,
  ): Point

  const Line: {
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
  };

  const Rect: {
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
  };

  const Matrix: {
    parseMatrix: (transform: string) => MatrixType | null;
  };
}

export = Graphics & Global
export default Graphics & Global;
