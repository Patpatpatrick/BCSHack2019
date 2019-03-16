package com.example.filedemo.database.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Date;
import java.util.Calendar;

@Entity
public class Report {

    @Id
    @GeneratedValue
    private int id;
    private String fileName;
    private String fileUrl;
    private Double latitude;
    private Double longitude;
    private Date date;
    private String status;
    private String category;

    public Report() { }

    public Report(String fileName, String fileUrl, Double latitude, Double longitude, String category) {
        this.fileName = fileName;
        this.fileUrl = fileUrl;
        this.latitude = latitude;
        this.longitude = longitude;
        date = new Date(Calendar.getInstance().getTime().getTime());
        status = "In Progress";
        this.category = category;
    }

    public int getId() {
        return id;
    }

    public String getFileName() {
        return fileName;
    }

    public String getFileUrl() {
        return fileUrl;
    }

    public Double getLatitude() {
        return latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public Date getDate() {
        return date;
    }

    public String getStatus() {
        return status;
    }

    public String getCategory() {
        return category;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
