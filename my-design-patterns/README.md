
design patterns implemented in multiple languages


\c++\
\javascript\



// ---------------------------------
Factory pattern
  create object without exposing the creation logic to the client
  refer to newly created object using a common interface.

  server:
                         Shape: draw()
    Rectangle implements Shape: draw()
    Square    implements Shape: draw()
      
    ShapeFactory
      getShape(shapeType):
        if (shapeType is "rectangle"):
          return  new Rectangle()  as Shape
        if (shapeType is "square"):
          return  new Square()     as Shape
    
  client:
    // create object without exposing the creation logic to the client
    // refer to newly created object (shapeObj) using a common interface (Shape).
    Shape shapeObj = getShape("rectangle");
    shapeObj.draw();
  
    Shape shapeObj = getShape("square");
    shapeObj.draw();
// ---------------------------------
Abstract Factory
    Interface is responsible for
		creating a factory of related objects
			without explicitly specifying their classes.
    Each generated factory
		can give the objects
			as per the Factory pattern.

  server:

    Shape:        draw();
    Rectangle implements Shape:        draw() {}
    Square    implements Shape:        draw() {}

    Color:        fill();
    Red   implements Color:        fill() {}
    Green implements Color:        fill() {}

	
    AbstractFactory:
      Shape getShape(shapeType);
      Color getColor(colorType);

    ShapeFactory implements AbstractFactory
      Shape getShape(shapeType):
        switch (shapeType)
          case "rectangle":  return  new Rectangle()  as Shape
          case "square":     return  new Square()     as Shape

    ColorFactory implements AbstractFactory
      Color getColor(colorType):
        switch (colorType)
          case "red":        return  new Red()    as Color
          case "green":      return  new Green()  as Color
    
	
    FactoryCreator
      AbstractFactory getFactory(String factoryType){
        switch (factoryType)
          case "shape":         return  new ShapeFactory()    as AbstractFactory
          case "color":         return  new ColorFactory()    as AbstractFactory

  client:
  
    AbstractFactory shapeFactoryObj = FactoryCreator.getFactory("rectangle");
                     Shape circleObj = shapeFactoryObj.getShape("square");
					 circleObj.draw();
// ---------------------------------
Singleton pattern
	A single class is responsible to create an object
		while making sure that
			only single object gets created.
		provides a way
			to access its only object
				which can be accessed directly
					without need to instantiate the object of the class.

	Singleton:
		private Singleton() {} // stop direct creation

		private static Singleton object1 = new Singleton();			// A single class is responsible to create an object
		public  static Singleton getObject() { return object1; }	// only single object gets created.
		
		use() {}

	client
		Singleton o = Singleton.getObject();
		o.use();
// ---------------------------------
Builder pattern builds a complex object using simple objects and using a step by step approach
A Builder class builds the final object step by step. This builder is independent of other objects.


// ---------------------------------


