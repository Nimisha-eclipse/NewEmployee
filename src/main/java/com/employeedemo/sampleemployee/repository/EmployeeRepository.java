package  com.employeedemo.sampleemployee.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employeedemo.sampleemployee.model.Employee;



public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
	Employee findByName(String name);
}