package com.vanezy.reportservice.database.Repo;

import com.vanezy.reportservice.database.Entity.Report;
import org.springframework.data.repository.CrudRepository;

public interface ReportRepository extends CrudRepository<Report, Integer> {}