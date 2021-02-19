import BaseClient from '../../Core/BaseClient';
export default class SchoolClient extends BaseClient {
    createDepartment(name: string, parentId: number, type: number, standardGrade: number, registerYear: number, order: number, departmentAdmins: string[]): Promise<any>;
    updateDepartment(id: number, name: string, parentId: number, type: number, standardGrade: number, registerYear: number, order: number, departmentAdmins: string[]): Promise<any>;
    deleteDepartment(id: string): Promise<any>;
    getDepartments(id: string): Promise<any>;
    createStudent(userId: string, name: string, department: string[]): Promise<any>;
    updateStudent(userId: string, name?: string, newUserId?: string, department?: string[]): Promise<any>;
    deleteStudent(userId: string): Promise<any>;
    batchCreateStudents(students: any[]): Promise<any>;
    batchUpdateStudents(students: any[]): Promise<any>;
    batchDeleteStudents(userIdList: string[]): Promise<any>;
    createParent(userId: string, mobile: string, toInvite: boolean, children: object[]): Promise<any>;
    updateParent(userId: string, mobile?: string, newUserId?: string, children?: string[]): Promise<any>;
    deleteParent(userId: string): Promise<any>;
    batchCreateParents(parents: any[]): Promise<any>;
    batchUpdateParents(parents: any[]): Promise<any>;
    batchDeleteParents(userIdList: string[]): Promise<any>;
    getUser(userId: string): Promise<any>;
    getStudents(departmentId: number, fetchChild: boolean): Promise<any>;
    getSubscribeQrCode(): Promise<any>;
    setSubscribeMode(mode: number): Promise<any>;
    getSubscribeMode(): Promise<any>;
    setTeacherViewMode(mode: number): Promise<any>;
    getTeacherViewMode(): Promise<any>;
    convertOpenid(userId: string): Promise<any>;
    protected filterNullValue(data: object): {};
}
