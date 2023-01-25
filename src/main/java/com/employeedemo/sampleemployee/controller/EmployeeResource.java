package  com.employeedemo.sampleemployee.controller;

import java.awt.PageAttributes.MediaType;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.employeedemo.sampleemployee.model.Employee;
import com.employeedemo.sampleemployee.sevice.EmployeeService;

@RestController
@RequestMapping("/api")
public class EmployeeResource {

	private EmployeeService employeeService;

	public EmployeeResource(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}

	

	@RequestMapping(value = "employee",method={RequestMethod.POST,RequestMethod.GET})
	public String createEmployee(@RequestBody Employee employee) throws URISyntaxException {
		try {
			
			Employee result = employeeService.save(employee);
			return("Saved Succcessfully");
		} catch (EntityExistsException e) {
			return ("Save Failed");
		}
	}


}