package com.vanezy.reportservice.service;

import com.vanezy.reportservice.database.Entity.Report;
import com.vanezy.reportservice.database.Repo.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReportService {

    @Autowired
    ReportRepository reportRepository;

    public List<Report> getAllReports() {
        List<Report> reports = new ArrayList<Report>();
        reportRepository.findAll().forEach(t -> reports.add(t));
        return reports;
    }

    public Report getReportById(int id) {
        return reportRepository.findById(id).get();
    }

    public void save(Report report) {
        reportRepository.save(report);
    }

    public void delete(int id) {
        reportRepository.deleteById(id);
    }
}
