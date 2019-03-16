package com.example.filedemo.database.Repo;

import com.example.filedemo.database.Entity.Report;
import org.springframework.data.repository.CrudRepository;

public interface ReportRepository extends CrudRepository<Report, Integer> {}