# Van-Ezy Backend Service  

## Dev

```bash
mvn spring-boot:run
```

That's it! The application can be accessed at `http://localhost:8080`.

You may also package the application in the form of a jar and then run the jar file like so -

```bash
mvn clean package
java -jar target/file-demo-0.0.1-SNAPSHOT.jar
```

## Endpoints

### Submit Report Data

```bash
POST http://localhost:8080/upload
```

Parameters:

```
{
    file: TYPE.FILE,
    latitude: TYPE.DOUBLE,
    longitude: TYPE.DOUBLE,
    category: TYPE.STRING
}

```

### Get All Reports

```bash
http://localhost:8080/reports
```

Response:

```
[
    {
        "id": 1,
        "fileName": "HELP.md",
        "fileUrl": "http://localhost:8080/downloadFile/HELP.md",
        "latitude": 123123123,
        "longitude": 123123,
        "date": "2019-03-16",
        "status": "In Progress",
        "category": "trash"
    }
]
```
