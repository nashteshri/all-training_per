// Enum to define possible roles
enum Role {
    Admin = 'Admin',
    Manager = 'Manager',
    Employee = 'Employee'
  }
  
  // Class to define the structure of a User
  class User {
    constructor(
      public id: number,
      public name: string,
      public role: Role
    ) {}
  }
  
  // Define allowed actions
  const permissions: Record<Role, string[]> = {
    [Role.Admin]: ['viewReports', 'editReports', 'deleteReports'],
    [Role.Manager]: ['viewReports', 'editReports'],
    [Role.Employee]: ['viewReports']
  };
  
  // Decorator to authorize access based on role permissions
  function Authorize(action: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value;
  
      descriptor.value = function (...args: any[]) {
        const user: User = args[0];
        if (permissions[user.role].includes(action)) {
          return originalMethod.apply(this, args);
        } else {
          console.error(`Unauthorized access: ${user.name} does not have permission to ${action}`);
          return undefined;
        }
      };
  
      return descriptor;
    };
  }
  
  // Class to handle report actions
  class ReportService {
    @Authorize('viewReports')
    viewReports(user: User) {
      console.log(`Reports viewed by ${user.name}`);
    }
  
    @Authorize('editReports')
    editReports(user: User) {
      console.log(`Reports edited by ${user.name}`);
    }
  
    @Authorize('deleteReports')
    deleteReports(user: User) {
      console.log(`Reports deleted by ${user.name}`);
    }
  }
  
  // Create users with different roles
  const admin = new User(1, 'Alice', Role.Admin);
  const manager = new User(2, 'Bob', Role.Manager);
  const employee = new User(3, 'Charlie', Role.Employee);
  
  // Create instance of ReportService
  const reportService = new ReportService();
  
  // Test scenarios
  reportService.viewReports(admin); // Should succeed
  reportService.editReports(admin); // Should succeed
  reportService.deleteReports(admin); // Should succeed
  
  reportService.viewReports(manager); // Should succeed
  reportService.editReports(manager); // Should succeed
  reportService.deleteReports(manager); // Should fail
  
  reportService.viewReports(employee); // Should succeed
  reportService.editReports(employee); // Should fail
  reportService.deleteReports(employee); // Should fail
  