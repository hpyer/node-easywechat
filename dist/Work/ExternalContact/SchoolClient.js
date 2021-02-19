'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class SchoolClient extends BaseClient_1.default {
    createDepartment(name, parentId, type, standardGrade, registerYear, order, departmentAdmins) {
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
    updateDepartment(id, name, parentId, type, standardGrade, registerYear, order, departmentAdmins) {
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
    deleteDepartment(id) {
        return this.httpGet('cgi-bin/school/department/delete', {
            id,
        });
    }
    getDepartments(id) {
        let params = {};
        if (id) {
            params['id'] = id;
        }
        return this.httpGet('cgi-bin/school/department/list', params);
    }
    createStudent(userId, name, department) {
        let params = {
            student_userid: userId,
            name,
            department: department,
        };
        return this.httpPostJson('cgi-bin/school/user/create_student', params);
    }
    updateStudent(userId, name = null, newUserId = null, department = null) {
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
    deleteStudent(userId) {
        return this.httpGet('cgi-bin/school/user/delete_student', {
            userid: userId,
        });
    }
    batchCreateStudents(students) {
        return this.httpPostJson('cgi-bin/school/user/batch_create_student', {
            students,
        });
    }
    batchUpdateStudents(students) {
        return this.httpPostJson('cgi-bin/school/user/batch_update_student', {
            students,
        });
    }
    batchDeleteStudents(userIdList) {
        return this.httpPostJson('cgi-bin/school/user/batch_delete_student', {
            useridlist: userIdList,
        });
    }
    createParent(userId, mobile, toInvite, children) {
        let params = {
            parent_userid: userId,
            mobile,
            to_invite: toInvite,
            children: children,
        };
        return this.httpPostJson('cgi-bin/school/user/create_parent', params);
    }
    updateParent(userId, mobile = null, newUserId = null, children = null) {
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
    deleteParent(userId) {
        return this.httpPostJson('cgi-bin/school/user/delete_parent', {
            userid: userId,
        });
    }
    batchCreateParents(parents) {
        return this.httpPostJson('cgi-bin/school/user/batch_create_parent', {
            parents,
        });
    }
    batchUpdateParents(parents) {
        return this.httpPostJson('cgi-bin/school/user/batch_update_parent', {
            parents,
        });
    }
    batchDeleteParents(userIdList) {
        return this.httpPostJson('cgi-bin/school/user/batch_delete_parent', {
            useridlist: userIdList,
        });
    }
    getUser(userId) {
        return this.httpGet('cgi-bin/school/user/get', {
            userid: userId,
        });
    }
    getStudents(departmentId, fetchChild) {
        return this.httpGet('cgi-bin/school/user/list', {
            department_id: departmentId,
            fetch_child: fetchChild ? 1 : 0,
        });
    }
    getSubscribeQrCode() {
        return this.httpGet('cgi-bin/externalcontact/get_subscribe_qr_code');
    }
    setSubscribeMode(mode) {
        return this.httpPostJson('cgi-bin/externalcontact/set_subscribe_mode', {
            subscribe_mode: mode,
        });
    }
    getSubscribeMode() {
        return this.httpGet('cgi-bin/externalcontact/get_subscribe_mode');
    }
    setTeacherViewMode(mode) {
        return this.httpPostJson('cgi-bin/school/set_teacher_view_mode', {
            view_mode: mode,
        });
    }
    getTeacherViewMode() {
        return this.httpGet('cgi-bin/school/get_teacher_view_mode');
    }
    convertOpenid(userId) {
        return this.httpGet('cgi-bin/externalcontact/convert_to_openid', {
            external_userid: userId,
        });
    }
    filterNullValue(data) {
        let returnData = {};
        for (let k in data) {
            if (data[k] !== null) {
                returnData[k] = data[k];
            }
        }
        return returnData;
    }
}
exports.default = SchoolClient;
