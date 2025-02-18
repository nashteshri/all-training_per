// Define the possible roles and statuses for employees
type Role = 'Manager' | 'Developer' | 'Intern';
type Status = 'active' | 'inactive';

// Define the structure of an Employee object
interface Employee {
    id: number;
    name: string;
    email: string;
    role: Role;
    status: Status;
}

// Utility type to allow partial updates to an Employee
type UpdateEmployee = Partial<Employee>;
// Utility type to create an Employee summary with only essential fields
type EmployeeSummary = Pick<Employee, 'name' | 'role'>;
// Utility type to store employees in a structured map format grouped by role
type EmployeesByRole = Record<Role, Employee[]>;

// Sample list of employees
const employees: Employee[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Manager', status: 'active' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Developer', status: 'inactive' },
];

// Function to update specific fields of an existing employee
function updateEmployee(id: number, updates: UpdateEmployee): void {
    const employee = employees.find(e => e.id === id);
    if (employee) {
        // Merge the updates with the existing employee data
        Object.assign(employee, updates);
    } else {
        throw new Error('Employee not found');
    }
}

// Create and display a summary of employees (only name and role)
const summaries: EmployeeSummary[] = employees.map(({ name, role }) => ({ name, role }));
console.table(summaries);

// Define the structure of an Activity object
interface Activity {
    employeeId: number;
    description: string;
    timestamp: Date;
}

// Sample list of activities
const activities: Activity[] = [];

// Function to log activities for employees
function logActivity(employeeId: number, description: string): void {
    const employee = employees.find(e => e.id === employeeId);
    if (employee && employee.status === 'active') {
        // Log the activity if the employee is active
        activities.push({ employeeId, description, timestamp: new Date() });
    } else {
        throw new Error('Cannot log activity for inactive employee or non-existent employee');
    }
}

// Type guard to check if an employee is a Manager
function isManager(employee: Employee): boolean {
    return employee.role === 'Manager';
}

// Type guard to check if an employee is active
function isActive(employee: Employee): boolean {
    return employee.status === 'active';
}

// Log an activity for an active employee
logActivity(1, 'Completed project review.');
try {
    // Attempt to log an activity for an inactive employee (should throw an error)
    logActivity(2, 'Attempting to log activity for inactive employee.');
} catch (error) {
    console.error(error);
}

// Function to count the total number of employees
function countEmployees(): number {
    return employees.length;
}

// Function to count the number of active employees
function countActiveEmployees(): number {
    return employees.filter(isActive).length;
}

// Function to display the distribution of roles
function roleDistribution(): EmployeesByRole {
    return employees.reduce((acc: EmployeesByRole, employee) => {
        acc[employee.role].push(employee);
        return acc;
    }, { Manager: [], Developer: [], Intern: [] });
}

// Function to validate if data matches the Employee format
function validateEmployeeData(data: any): data is Employee {
    return 'id' in data && 'name' in data && 'email' in data && 'role' in data && 'status' in data;
}

// Function to process external data and validate it against the Employee format
function processExternalData(data: any[]): void {
    data.forEach(item => {
        if (validateEmployeeData(item)) {
            // Add valid employee data to the employees list
            employees.push(item);
        } else {
            console.error('Invalid employee data:', item);
        }
    });
}

// Simulate receiving external data
processExternalData([{ id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'Intern', status: 'active' }]);

// Display analytics results
console.log('Total Employees:', countEmployees());
console.log('Active Employees:', countActiveEmployees());
console.table(roleDistribution());

try {
    // Attempt to update a non-existent employee (should throw an error)
    updateEmployee(99, { name: 'Non-existent Employee' });
} catch (error) {
    console.error('Update error:', error);
}

// Use grouped console logs and tables to inspect data
console.group('Employee Data');
console.table(employees);
console.groupEnd();

console.log('Analytics:', {
    totalEmployees: countEmployees(),
    activeEmployees: countActiveEmployees(),
    roleDistribution: roleDistribution()
});


