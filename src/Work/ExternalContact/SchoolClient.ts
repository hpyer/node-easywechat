'use strict';

import BaseClient from '../../Core/BaseClient';
import { inArray, merge } from '../../Core/Utils';

export default class SchoolClient extends BaseClient
{

  createDepartment(name: string, parentId: number, type: number, standardGrade: number, registerYear: number, order: number, departmentAdmins: string[]): Promise<any>
  {
    let params = {
      name,
      parentid: parentId,
      type,
      standard_grade: standardGrade,
      register_year: registerYear,
      order,
      department_admins: departmentAdmins,
    };
    return this.httpPostJson('cgi-bin/school/department/create', params);
  }

  updateDepartment(id: number, name: string, parentId: number, type: number, standardGrade: number, registerYear: number, order: number, departmentAdmins: string[]): Promise<any>
  {
    let params = this.filterNullValue({
      id,
      name,
      parentid: parentId,
      type,
      standard_grade: standardGrade,
      register_year: registerYear,
      order,
      department_admins: departmentAdmins,
    });
    return this.httpPostJson('cgi-bin/school/department/update', params);
  }

  deleteDepartment(id: string): Promise<any>
  {
    return this.httpGet('cgi-bin/school/department/delete', {
      id,
    });
  }

  getDepartments(id: string): Promise<any>
  {
    let params = {};
    if (id) {
      params['id'] = id;
    }

    return this.httpGet('cgi-bin/school/department/list', params);
  }

  createStudent(userId: string, name: string, department: string[]): Promise<any>
  {
    let params = {
      student_userid: userId,
      name,
      department: department,
    };
    return this.httpPostJson('cgi-bin/school/user/create_student', params);
  }

  updateStudent(userId: string, name: string = null, newUserId: string = null, department: string[] = null): Promise<any>
  {
    let params = {
      student_userid: userId,
    };
    if (name) {
      params['name'] = name;
    }
    if (newUserId) {
      params['new_student_userid'] = newUserId;
    }
    if (department) {
      params['department'] = department;
    }
    return this.httpPostJson('cgi-bin/school/user/update_student', params);
  }

  deleteStudent(userId: string): Promise<any>
  {
    return this.httpGet('cgi-bin/school/user/delete_student', {
      userid: userId,
    });
  }

  batchCreateStudents(students: any[]): Promise<any>
  {
    return this.httpPostJson('cgi-bin/school/user/batch_create_student', {
      students,
    });
  }

  batchUpdateStudents(students: any[]): Promise<any>
  {
    return this.httpPostJson('cgi-bin/school/user/batch_update_student', {
      students,
    });
  }

  batchDeleteStudents(userIdList: string[]): Promise<any>
  {
    return this.httpPostJson('cgi-bin/school/user/batch_delete_student', {
      useridlist: userIdList,
    });
  }

  createParent(userId: string, mobile: string, toInvite: boolean, children: object[]): Promise<any>
  {
    let params = {
      parent_userid: userId,
      mobile,
      to_invite: toInvite,
      children: children,
    };
    return this.httpPostJson('cgi-bin/school/user/create_parent', params);
  }

  updateParent(userId: string, mobile: string = null, newUserId: string = null, children: string[] = null): Promise<any>
  {
    let params = {
      parent_userid: userId,
    };
    if (mobile) {
      params['mobile'] = mobile;
    }
    if (newUserId) {
      params['new_parent_userid'] = newUserId;
    }
    if (children) {
      params['children'] = children;
    }
    return this.httpPostJson('cgi-bin/school/user/update_parent', params);
  }

  deleteParent(userId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/school/user/delete_parent', {
      userid: userId,
    });
  }

  batchCreateParents(parents: any[]): Promise<any>
  {
    return this.httpPostJson('cgi-bin/school/user/batch_create_parent', {
      parents,
    });
  }

  batchUpdateParents(parents: any[]): Promise<any>
  {
    return this.httpPostJson('cgi-bin/school/user/batch_update_parent', {
      parents,
    });
  }

  batchDeleteParents(userIdList: string[]): Promise<any>
  {
    return this.httpPostJson('cgi-bin/school/user/batch_delete_parent', {
      useridlist: userIdList,
    });
  }

  getUser(userId: string): Promise<any>
  {
    return this.httpGet('cgi-bin/school/user/get', {
      userid: userId,
    });
  }

  getStudents(departmentId: number, fetchChild: boolean): Promise<any>
  {
    return this.httpGet('cgi-bin/school/user/list', {
      department_id: departmentId,
      fetch_child: fetchChild ? 1 : 0,
    });
  }

  getSubscribeQrCode(): Promise<any>
  {
    return this.httpGet('cgi-bin/externalcontact/get_subscribe_qr_code');
  }

  setSubscribeMode(mode: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/set_subscribe_mode', {
      subscribe_mode: mode,
    });
  }

  getSubscribeMode(): Promise<any>
  {
    return this.httpGet('cgi-bin/externalcontact/get_subscribe_mode');
  }

  setTeacherViewMode(mode: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/school/set_teacher_view_mode', {
      view_mode: mode,
    });
  }

  getTeacherViewMode(): Promise<any>
  {
    return this.httpGet('cgi-bin/school/get_teacher_view_mode');
  }

  convertOpenid(userId: string): Promise<any>
  {
    return this.httpGet('cgi-bin/externalcontact/convert_to_openid', {
      external_userid: userId,
    });
  }

  protected filterNullValue(data: object)
  {
    let returnData = {};
    for (let k in data) {
      if (data[k] !== null) {
        returnData[k] = data[k];
      }
    }
    return returnData;
  }

}
