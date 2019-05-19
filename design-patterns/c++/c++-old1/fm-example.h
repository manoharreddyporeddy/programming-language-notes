// "Abstract Product" interface (interface = abstract class - as pure virtual function exists)
class IDocument
{
public:
    virtual void open()=0;
    virtual void save()=0;
    virtual void close()=0;
};
// "Concrete Product" (implements interface)
class Document: public IDocument
{
public:
    void open() {}
    void save() {}
    void close() {}
};

// "Creator"          - May or may not be an interface (interface = abstract class)
class AppFramework
{
public:
    // Factory Method - may contain default implementation
    virtual IDocument* CreateDocument() = 0;
    virtual void DestroyDocument(IDocument* pdoc) = 0;
    // Some operation
    IDocument* NewDocument()
    {    IDocument* p = CreateDocument();
        p->open();
        return p;
    }
    void CloseDocument(IDocument* pdoc)
    {    pdoc->close();
        DestroyDocument(pdoc);
    }
};
// "Concrete Creator"
class Application: public AppFramework
{
public:
    // Factory Method
    IDocument* CreateDocument()   // must override, by Factory method rule
    {    return new Document();    // must return its appropriate concrete product
    }
    void DestroyDocument(IDocument* pdoc)
    {    delete pdoc;
    }
};
