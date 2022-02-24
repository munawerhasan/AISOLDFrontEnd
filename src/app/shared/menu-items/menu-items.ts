import { Injectable } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Role } from '../../models/role';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}


const ownerMenu = [
  {
    label: 'Main',
    main: [
      {
        state: 'owner',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'icon-home',
      },
      {
        state: 'school',
        short_label: 'S',
        name: 'School',
        type: 'sub',
        icon: 'icon-medall',
        children: [
          {
            state: 'list',
            name: 'View List'
          },
          {
            state: 'add',
            name: 'Add School'
          }
        ]
      },
      {
        state: 'admin',
        short_label: 'S',
        name: 'School Admin',
        type: 'sub',
        icon: 'feather icon-user',
        children: [
          {
            state: 'list',
            name: 'View List'
          },
          {
            state: 'add',
            name: 'Add Admin'
          }
        ]
      },
    ],
  },
  {
    label: 'Admission Process',
    main: [
      {
        state: 'PreAdmission',
        short_label: 'B',
        name: 'Pre Admission',
        type: 'sub',
        icon: 'icon-layout-grid2-alt',
        children: [
          {
            state: 'Enquiry',
            name: 'Enquiry'
          },
          {
            state: 'Registration',
            name: 'Registration'
          },
          {
            state: 'Counselor',
            name: 'Counselor'
          },
          {
            state: 'Prospectos',
            name: 'Prospectos'
          },
          {
            state: 'Referrals',
            name: 'Referrals'
          },
          {
            state: 'AdmissionTest',
            name: 'AdmissionTest'
          },
          {
            state: 'AnalysisChart',
            name: 'Analysis Chart'
          }
        ]
      },
      {
        state: 'Course',
        short_label: 'A',
        name: 'Course',
        type: 'sub',
        icon: 'icon-crown',
        children: [
          {
            state: 'Class',
            name: 'Class'
          },
          {
            state: 'Batch',
            name: 'Batch'
          },
          {
            state: 'Syllabus',
            name: 'Syllabus'
          },
          {
            state: 'Lecture',
            name: 'Lecture'
          },
          {
            state: 'CourseCoverage',
            name: 'Course Coverage'
          },
          {
            state: 'AnalysisChart',
            name: 'Analysis Chart'
          }
        ]
      },
      {
        state: 'Admission',
        short_label: 'A',
        name: 'Admission',
        type: 'sub',
        icon: 'icon-reload rotate-refresh',
        children: [

          {
            state: 'Documents',
            name: 'Documents'
          },
          {
            state: 'AdmissionForm',
            name: 'AdmissionForm'
          },
          {
            state: 'I-Card',
            name: 'I-Card'
          },
          {
            state: 'FeeStructure',
            name: 'FeeStructure'
          },
          {
            state: 'AnalysisChart',
            name: 'Analysis Chart'
          }
        ]
      },
      {
        state: 'student',
        short_label: 'A',
        name: 'Students',
        type: 'sub',
        icon: 'feather icon-user',
        children: [
          {
            state: 'list',
            name: 'View Students'
          },
          {
            state: 'details',
            name: 'Add Students'
          }
        ]
      },
      {
        state: 'employee',
        short_label: 'A',
        name: 'Employees',
        type: 'sub',
        icon: 'feather icon-user',
        children: [
          {
            state: 'list',
            name: 'View Employees'
          },
          {
            state: 'add',
            name: 'Add Employees'
          },
          {
            state: 'class-mapping',
            name: 'Map Employee'
          },
        ]
      }
    ]
  },
  {
    label: 'Academic Process',
    main: [
      {
        state: 'Academic',
        short_label: 'F',
        name: 'Academic',
        type: 'sub',
        icon: 'icon-layers',
        children: [
          {
            state: 'Classes',
            name: 'Classes'
          }, {
            state: 'ClassWork',
            name: 'ClassWork'
          }, {
            state: 'HomeWork',
            name: 'HomeWork'
          }, {
            state: 'Lectures',
            name: 'Lectures'
          },
          {
            state: 'Assignment',
            name: 'Assignment'
          },
          {
            state: 'UploadLecture',
            name: 'UploadLecture'
          },
          {
            state: 'Syllabus',
            name: 'Syllabus'
          },
          {
            state: 'TimeTable',
            name: 'TimeTable'
          },
          {
            state: 'Exam',
            name: 'Exam'
          },
        ]
      },
      {
        state: 'class',
        short_label: 'C',
        name: 'Classes',
        type: 'sub',
        icon: 'icon-pencil-alt',
        children: [
          {
            state: 'list',
            name: 'View Classes'
          },
          {
            state: 'add',
            name: 'Add Class'
          },
        ]
      },
      {
        state: 'subject',
        short_label: 'S',
        name: 'Subjects & Mapping',
        type: 'sub',
        icon: 'icon-pencil-alt',
        children: [
          {
            state: 'list',
            name: 'View Subjets'
          },
          {
            state: 'mapping',
            name: 'Subject Mapping'
          },
          {
            state: 'teacher-mapping',
            name: 'Teacher Mapping'
          },
        ]
      },
      {
        state: 'assignment',
        short_label: 'S',
        name: 'Assignments',
        type: 'sub',
        icon: 'icon-pencil-alt',
        children: [
          {
            state: 'teacher',
            name: 'Assignment By teacher'
          },
          {
            state: 'add',
            name: 'Add Assignment'
          },
        ]
      },
      {
        state: 'onlineclass',
        short_label: 'P',
        main_state: 'forms',
        name: 'Online Classes',
        type: 'sub',
        icon: 'icon-pencil-alt',
        badge: [
          {
            type: 'warning',
            value: 'New'
          }
        ],
        children: [
          {
            state: 'broadcast',
            name: 'Broadcast Class'
          }, {
            state: 'Senders',
            name: 'Senders'
          }, {
            state: 'Listeners',
            name: 'Listeners'
          }, {
            state: 'ViewDetails',
            name: 'ViewDetails'
          }
        ]
      },
      {
        state: 'Leave',
        short_label: 'M',
        main_state: 'forms',
        name: 'Leave',
        type: 'sub',
        icon: 'feather icon-package',
        children: [
          {
            state: 'StudentLeave',
            name: 'StudentLeave'
          }, {
            state: 'TeacherLeave',
            name: 'TeacherLeave'
          }, {
            state: 'EmployeeLeave',
            name: 'EmployeeLeave'
          }, {
            state: 'ApplyLeave',
            name: 'ApplyLeave'
          }, {
            state: 'Holiday',
            name: 'Holiday'
          }, {
            state: 'AnalysisChart',
            name: 'Analysis Chart'
          }
        ]
      },
      {
        state: 'Attandance',
        short_label: 'S',
        main_state: 'forms',
        name: 'Attandance',
        type: 'sub',
        icon: 'icon-shortcode',
        children: [
          {
            state: 'StudentAttandance',
            name: 'StudentAttandance'
          }, {
            state: 'TeacherAttandance',
            name: 'TeacherAttandance'
          }, {
            state: 'EmployeeAttandance',
            name: 'EmployeeAttandance'
          }, {
            state: 'BioMetric',
            name: 'BioMetric'
          }, {
            state: 'BarCode',
            name: 'BarCode'
          }, {
            state: 'MarkAttandance',
            name: 'MarkAttandance'
          }, {
            state: 'AnalysisChart',
            name: 'Analysis Chart'
          }
        ]
      },
      {
        state: 'Examination',
        short_label: 'FW',
        main_state: 'forms',
        name: 'Examination',
        type: 'sub',
        icon: 'feather icon-user',
        children: [
          {
            state: 'AnnualExam',
            name: 'AnnualExam'
          }, {
            state: 'HalfYearly',
            name: 'HalfYearly'
          }, {
            state: 'Quarterly',
            name: 'Quarterly '
          }, {
            state: 'ReportCard',
            name: 'ReportCard'
          }, {
            state: 'Analysis ',
            name: 'Analysis(Consolidated,Grace)'
          }, {
            state: 'AnalysisChart',
            name: 'Analysis Chart'
          }
        ]
      }
    ]
  },
  {
    label: 'Master Data',
    main: [
      {
        state: 'masterbatch',
        short_label: 'B',
        name: 'Master Batch',
        type: 'sub',
        icon: 'icon-list',
        children: [
          {
            state: 'list',
            name: 'View Master Batch'
          },
          {
            state: 'add',
            name: 'Add Master Batch'
          }
        ]
      },
      {
        state: 'masterclass',
        short_label: 'B',
        name: 'Master Class',
        type: 'sub',
        icon: 'icon-book',
        children: [
          {
            state: 'list',
            name: 'View Master Class'
          },
          {
            state: 'add',
            name: 'Add Master Class'
          }
        ]
      },
      {
        state: 'masterdepartment',
        short_label: 'B',
        name: 'Master Department',
        type: 'sub',
        icon: 'icon-spray',
        children: [
          {
            state: 'list',
            name: 'View Master Department'
          },
          {
            state: 'add',
            name: 'Add Master Department'
          }
        ]
      },
      {
        state: 'masterdocument',
        short_label: 'B',
        name: 'Master Document',
        type: 'sub',
        icon: 'icon-files',
        children: [
          {
            state: 'list',
            name: 'View Master Document'
          },
          {
            state: 'add',
            name: 'Add Master Document'
          }
        ]
      },
      {
        state: 'masteremployee',
        short_label: 'B',
        name: 'Master Employee',
        type: 'sub',
        icon: 'icon-user',
        children: [
          {
            state: 'list',
            name: 'View Master Employee'
          },
          {
            state: 'add',
            name: 'Add Master Employee'
          }
        ]
      },
      {
        state: 'masterleave',
        short_label: 'B',
        name: 'Master Leave',
        type: 'sub',
        icon: 'icon-timer',
        children: [
          {
            state: 'list',
            name: 'View Master Leave'
          },
          {
            state: 'add',
            name: 'Add Master Leave'
          }
        ]
      },
      {
        state: 'masteroccupation',
        short_label: 'B',
        name: 'Master Occupation',
        type: 'sub',
        icon: 'icon-star',
        children: [
          {
            state: 'list',
            name: 'View Master Occupation'
          },
          {
            state: 'add',
            name: 'Add Master Occupation'
          }
        ]
      },
      {
        state: 'mastersection',
        short_label: 'B',
        name: 'Master Section',
        type: 'sub',
        icon: 'icon-tag',
        children: [
          {
            state: 'list',
            name: 'View Master Section'
          },
          {
            state: 'add',
            name: 'Add Master Section'
          }
        ]
      },
      {
        state: 'mastersubject',
        short_label: 'B',
        name: 'Master Subject',
        type: 'sub',
        icon: 'icon-pencil',
        children: [
          {
            state: 'list',
            name: 'View Master Subject'
          },
          {
            state: 'add',
            name: 'Add Master Subject'
          }
        ]
      },
      {
        state: 'masterwing',
        short_label: 'B',
        name: 'Master Wing',
        type: 'sub',
        icon: 'icon-loop',
        children: [
          {
            state: 'list',
            name: 'View Master Wing'
          },
          {
            state: 'add',
            name: 'Add Master Wing'
          }
        ]
      },
    ]
  },
  {
    label: 'Broardcast & Event',
    main: [
      {
        state: 'Broadcast',
        short_label: 'A',
        name: 'Broadcast',
        type: 'sub',
        icon: 'icon-id-badge',
        children: [
          {
            state: 'Circular',
            name: 'Circular'
          }, {
            state: 'News',
            name: 'News'
          }, {
            state: 'Event',
            name: 'Event'
          }, {
            state: 'SMS',
            name: 'SMS'
          },
          {
            state: 'Mail',
            name: 'Mail'
          }
        ]
      },
      {
        state: 'SMS',
        short_label: 'A',
        name: 'SMS',
        type: 'sub',
        icon: 'icon-settings',
        children: [
          {
            state: 'Setting',
            name: 'Setting'
          }, {
            state: 'SendSMS',
            name: 'SendSMS'
          }, {
            state: 'Account',
            name: 'Account'
          }, {
            state: 'Schedule',
            name: 'Schedule'
          },
          {
            state: 'AnalysisChart',
            name: 'Analysis Chart'
          }
        ]
      },
      {
        state: 'Event',
        short_label: 'U',
        name: 'Event',
        type: 'sub',
        icon: 'icon-user',
        children: [
          {
            state: 'EventCalendar',
            name: 'EventCalendar'
          },
          {
            state: 'Video',
            name: 'Video'
          },
          {
            state: 'Photo',
            name: 'Photo'
          },
          {
            state: 'AdEvet',
            name: 'Add Evet'
          }
        ]
      },
      {
        state: 'Award',
        short_label: 'E',
        name: 'Award',
        type: 'sub',
        icon: 'feather icon-email',
        children: [
          {
            state: 'Student',
            name: 'Student'
          }, {
            state: 'Teacher',
            name: 'Teacher'
          }, {
            state: 'Employee',
            name: 'Employee'
          }, {
            state: 'AnalysisChart',
            name: 'Analysis Chart',
          }
        ]
      },
      {
        state: 'Alumni',
        short_label: 'T',
        name: 'Alumni',
        type: 'sub',
        icon: 'icon-check-box',
        children: [
          {
            state: 'Details',
            name: 'Details'
          }, {
            state: 'ApprovedAlumni',
            name: 'ApprovedAlumni'
          }
        ]
      }
    ]
  },
  {
    label: 'Help & Complain',
    main: [
      {
        state: 'Medical',
        short_label: 'B',
        name: 'Medical',
        type: 'sub',
        icon: 'icon-receipt',
        children: [
          {
            state: 'Emergency',
            name: 'Emergency'
          },
          {
            state: 'HealthCard',
            name: 'HealthCard'
          },
          {
            state: 'History',
            name: 'History'
          }
        ]
      },
      {
        state: 'Help',
        short_label: 'D',
        name: 'Help',
        type: 'sub',
        icon: 'icon-widgetized',
        children: [
          {
            state: 'CreateTicket',
            name: 'CreateTicket'
          },
          {
            state: 'ViewTicket',
            name: 'ViewTicket'
          },
          {
            state: 'AnalysisChart',
            name: 'Analysis Chart'
          }
        ]
      },
      {
        state: 'Complain',
        short_label: 'D',
        name: 'Complain',
        type: 'sub',
        icon: 'feather icon-user',
        children: [
          {
            state: 'CreateComplain',
            name: 'CreateComplain'
          },
          {
            state: 'History',
            name: 'History'
          },
          {
            state: 'AnalysisChart',
            name: 'Analysis Chart'
          }
        ]
      }
    ]
  },
  {
    label: 'Library & Fee',
    main: [
      {
        state: 'Library',
        name: 'Library',
        type: 'sub',
        icon: 'feather icon-pencil',
        children: [
          {
            state: 'ManageBook',
            name: 'ManageBook'
          },
          {
            state: 'IssueBook',
            name: 'IssueBook'
          },
          {
            state: 'ReturnBook',
            name: 'ReturnBook'
          },
          {
            state: 'BookTags',
            name: 'BookTags'
          },
          {
            state: 'BookBarCode',
            name: 'BookBarCode'
          },
          {
            state: 'DownloadEbook',
            name: 'DownloadEbook'
          },
          {
            state: 'AnalysisChart',
            name: 'Analysis Chart'
          }
        ]
      },
      {
        state: 'Fee',
        short_label: 'I',
        name: 'Fee',
        type: 'sub',
        icon: 'icon-layout-media-right',
        children: [
          {
            state: 'ParticularHead',
            name: 'ParticularHead'
          },
          {
            state: 'FeeSchedule',
            name: 'FeeSchedule'
          },
          {
            state: 'FeeCollection',
            name: 'FeeCollection'
          },
          {
            state: 'InstallmentMaster',
            name: 'InstallmentMaster'
          },
          {
            state: 'Defaulter',
            name: 'Defaulter'
          },
          {
            state: 'Cheque',
            name: 'Cheque'
          },
          {
            state: 'CautionMoney',
            name: 'CautionMoney'
          },
          {
            state: 'Refund',
            name: 'Refund'
          },
          {
            state: 'AnalysisChart',
            name: 'Analysis Chart'
          }
        ]
      },

    ]
  },
  {
    label: 'Report & Analysis',
    main: [
      {
        state: 'Report',
        short_label: 'A',
        name: 'Report',
        type: 'sub',
        icon: 'icon-id-badge',
        children: [
          {
            state: 'Fee',
            type: 'sub',
            name: 'Fee',
            children: [
              {
                state: 'FeeReport',
                name: 'FeeReport',
                target: true
              },
              {
                state: 'FeeReportChart',
                name: 'FeeReportChart',
                target: true
              }
            ]
          },
          {
            state: 'Exam',
            type: 'sub',
            name: 'Exam',
            children: [
              {
                state: 'ExamReport',
                name: 'ExamReport',
                target: true
              },
              {
                state: 'ExamReportChart',
                name: 'ExamReportChart',
                target: true
              }
            ]
          },
          {
            state: 'Attandance',
            type: 'sub',
            name: 'Attandance',
            children: [
              {
                state: 'AttandanceReport',
                name: 'AttandanceReport',
                target: true
              },
              {
                state: 'AttandanceReportChart',
                name: 'AttandanceReportChart',
                target: true
              }
            ]
          },
          {
            state: 'Admission',
            type: 'sub',
            name: 'Admission',
            children: [
              {
                state: 'AdmissionReport',
                name: 'AdmissionReport',
                target: true
              },
              {
                state: 'AdmissionReportChart',
                name: 'AdmissionReportChart',
                target: true
              }
            ]
          },
          {
            state: 'Employee',
            type: 'sub',
            name: 'Employee',
            children: [
              {
                state: 'EmployeeReport',
                name: 'EmployeeReport',
                target: true
              },
              {
                state: 'EmployeeReportChart',
                name: 'EmployeeReportChart',
                target: true
              }
            ]
          },
          {
            state: 'Activity',
            type: 'sub',
            name: 'Activity',
            children: [
              {
                state: 'ActivityReport',
                name: 'ActivityReport',
                target: true
              },
              {
                state: 'ActivityReportChart',
                name: 'ActivityReportChart',
                target: true
              }
            ]
          },
          {
            state: 'Transport',
            type: 'sub',
            name: 'Transport',
            children: [
              {
                state: 'TransportReport',
                name: 'TransportReport',
                target: true
              },
              {
                state: 'TransportReportChart',
                name: 'TransportReportChart',
                target: true
              }
            ]
          },

        ]
      }
    ]
  },
  {
    label: 'Configuration',
    main: [
      {
        state: 'Permission',
        short_label: 'T',
        name: 'Permission',
        type: 'sub',
        icon: 'feather icon-user',
        children: [
          {
            state: 'Studnet',
            name: 'Studnet'
          }, {
            state: 'Teacher',
            name: 'Teacher'
          }, {
            state: 'Employee',
            name: 'Employee'
          }
        ]
      }
    ]
  },
  {
    label: 'Others',
    main: [
      {
        state: 'HRManagement',
        short_label: 'C',
        name: 'HR Management',
        type: 'sub',
        icon: 'icon-bar-chart-alt',
        children: [
          {
            state: 'Department',
            name: 'Department'
          }, {
            state: 'Designation',
            name: 'Designation'
          }, {
            state: 'I-Card',
            name: 'I-Card'
          }, {
            state: 'Documents',
            name: 'Documents'
          }
        ]
      },
      {
        state: 'Transaport',
        short_label: 'M',
        name: 'Transaport',
        type: 'sub',
        icon: 'icon-map-alt',
        children: [
          {
            state: 'Routes',
            name: 'Routes'
          },
          {
            state: 'Vehicles',
            name: 'Vehicles'
          },
          {
            state: 'ManageTransport',
            name: 'Manage Transport'
          },
          {
            state: 'BusLocation',
            name: 'Bus Location'
          },
          {
            state: 'GPSTracker',
            name: 'GPS Tracker'
          },
          {
            state: 'AnalysisChart',
            name: 'Analysis Chart'
          }
        ]
      },
      {
        state: 'Pass',
        short_label: 'T',
        name: 'Pass',
        type: 'sub',
        icon: 'icon-check-box',
        children: [
          {
            state: 'VisitorPass',
            name: 'VisitorPass'
          }, {
            state: 'GatePass',
            name: 'GatePass'
          }, {
            state: 'Create',
            name: 'Create'
          },
          {
            state: 'AnalysisChart',
            name: 'Analysis Chart'
          },

        ]
      },
      {
        state: 'Hostel',
        short_label: 'T',
        name: 'Hostel',
        type: 'sub',
        icon: 'icon-check-box',
        children: [
          {
            state: 'Rooms',
            name: 'Rooms'
          }, {
            state: 'Charges',
            name: 'Charges'
          }, {
            state: 'Apply',
            name: 'Apply'
          },
          {
            state: 'AnalysisChart',
            name: 'Analysis Chart'
          },

        ]
      },
      {
        state: 'Inventory',
        short_label: 'T',
        name: 'Inventory',
        type: 'sub',
        icon: 'icon-check-box',
        children: [
          {
            state: 'Stores',
            name: 'Stores'
          }, {
            state: 'StoreItems',
            name: 'StoreItems'
          }, {
            state: 'Suppliers',
            name: 'Suppliers'
          },
          {
            state: 'PurchaseOrders',
            name: 'PurchaseOrders'
          },
          {
            state: 'Sale',
            name: 'Sale'
          },
          {
            state: 'Consuption',
            name: 'Consuption'
          },
          {
            state: 'Requisition',
            name: 'Requisition'
          },

        ]
      },
      {
        state: 'Placement',
        short_label: 'T',
        name: 'Placement',
        type: 'sub',
        icon: 'icon-check-box',
        children: [
          {
            state: 'Companies',
            name: 'Companies'
          }, {
            state: 'PlacementEvent',
            name: 'PlacementEvent'
          }, {
            state: 'Training',
            name: 'Training'
          },
          {
            state: 'NOC Listing',
            name: 'NOC Listing'
          },
          {
            state: 'AnalysisChart',
            name: 'Analysis Chart'
          }
        ]
      },
    ]
  },
];

const adminMenus = [
  {
    label: 'Main',
    main: [
      {
        state: 'admin',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'icon-home',
      }
    ],
  },
  {
    label: 'Master Data',
    main: [
      {
        state: 'master',
        short_label: 'A',
        name: 'Master Configuration',
        type: 'sub',
        icon: 'icon-id-badge',
        children:[
          {
            state: 'masterbatch',
            short_label: 'B',
            name: 'Master Batch',
            type: 'sub',
            icon: 'icon-list',
            children: [
              {
                state: 'list',
                name: 'View Master Batch'
              },
              {
                state: 'add',
                name: 'Add Master Batch'
              }
            ]
          },
          {
            state: 'masterclass',
            short_label: 'B',
            name: 'Master Class',
            type: 'sub',
            icon: 'icon-book',
            children: [
              {
                state: 'list',
                name: 'View Master Class'
              },
              {
                state: 'add',
                name: 'Add Master Class'
              }
            ]
          },
          {
            state: 'mastersection',
            short_label: 'B',
            name: 'Master Section',
            type: 'sub',
            icon: 'icon-tag',
            children: [
              {
                state: 'list',
                name: 'View Master Section'
              },
              {
                state: 'add',
                name: 'Add Master Section'
              }
            ]
          },
          {
            state: 'mastersubject',
            short_label: 'B',
            name: 'Master Subject',
            type: 'sub',
            icon: 'icon-pencil',
            children: [
              {
                state: 'list',
                name: 'View Master Subject'
              },
              {
                state: 'add',
                name: 'Add Master Subject'
              }
            ]
          },
          {
            state: 'masteremployee',
            short_label: 'B',
            name: 'Master Employee',
            type: 'sub',
            icon: 'icon-user',
            children: [
              {
                state: 'list',
                name: 'View Master Employee'
              },
              {
                state: 'add',
                name: 'Add Master Employee'
              }
            ]
          },
          {
            state: 'masterdepartment',
            short_label: 'B',
            name: 'Master Department',
            type: 'sub',
            icon: 'icon-spray',
            children: [
              {
                state: 'list',
                name: 'View Master Department'
              },
              {
                state: 'add',
                name: 'Add Master Department'
              }
            ]
          },
          {
            state: 'masterdocument',
            short_label: 'B',
            name: 'Master Document',
            type: 'sub',
            icon: 'icon-files',
            children: [
              {
                state: 'list',
                name: 'View Master Document'
              },
              {
                state: 'add',
                name: 'Add Master Document'
              }
            ]
          },
          {
            state: 'masterleave',
            short_label: 'B',
            name: 'Master Leave',
            type: 'sub',
            icon: 'icon-timer',
            children: [
              {
                state: 'list',
                name: 'View Master Leave'
              },
              {
                state: 'add',
                name: 'Add Master Leave'
              }
            ]
          },
          {
            state: 'masteroccupation',
            short_label: 'B',
            name: 'Master Occupation',
            type: 'sub',
            icon: 'icon-star',
            children: [
              {
                state: 'list',
                name: 'View Master Occupation'
              },
              {
                state: 'add',
                name: 'Add Master Occupation'
              }
            ]
          },
          {
            state: 'masterwing',
            short_label: 'B',
            name: 'Master Wing',
            type: 'sub',
            icon: 'icon-loop',
            children: [
              {
                state: 'list',
                name: 'View Master Wing'
              },
              {
                state: 'add',
                name: 'Add Master Wing'
              }
            ]
          },
        ]
      }
      
    ]
  },
  {
    label: 'Admission Process',
    main: [
      // {
      //   state: 'PreAdmission',
      //   short_label: 'B',
      //   name: 'Pre Admission',
      //   type: 'sub',
      //   icon: 'icon-layout-grid2-alt',
      //   children: [
      //     {
      //       state: 'Enquiry',
      //       name: 'Enquiry'
      //     },
      //     {
      //       state: 'Registration',
      //       name: 'Registration'
      //     },
      //     {
      //       state: 'Counselor',
      //       name: 'Counselor'
      //     },
      //     {
      //       state: 'Prospectos',
      //       name: 'Prospectos'
      //     },
      //     {
      //       state: 'Referrals',
      //       name: 'Referrals'
      //     },
      //     {
      //       state: 'AdmissionTest',
      //       name: 'AdmissionTest'
      //     },
      //     {
      //       state: 'AnalysisChart',
      //       name: 'Analysis Chart'
      //     }
      //   ]
      // },
      // {
      //   state: 'Course',
      //   short_label: 'A',
      //   name: 'Course',
      //   type: 'sub',
      //   icon: 'icon-crown',
      //   children: [
      //     {
      //       state: 'Class',
      //       name: 'Class'
      //     },
      //     {
      //       state: 'Batch',
      //       name: 'Batch'
      //     },
      //     {
      //       state: 'Syllabus',
      //       name: 'Syllabus'
      //     },
      //     {
      //       state: 'Lecture',
      //       name: 'Lecture'
      //     },
      //     {
      //       state: 'CourseCoverage',
      //       name: 'Course Coverage'
      //     },
      //     {
      //       state: 'AnalysisChart',
      //       name: 'Analysis Chart'
      //     }
      //   ]
      // },
      // {
      //   state: 'Admission',
      //   short_label: 'A',
      //   name: 'Admission',
      //   type: 'sub',
      //   icon: 'icon-reload rotate-refresh',
      //   children: [
      //     {
      //       state: 'Documents',
      //       name: 'Documents'
      //     },
      //     {
      //       state: 'AdmissionForm',
      //       name: 'AdmissionForm'
      //     },
      //     {
      //       state: 'I-Card',
      //       name: 'I-Card'
      //     },
      //     {
      //       state: 'FeeStructure',
      //       name: 'FeeStructure'
      //     },
      //     {
      //       state: 'AnalysisChart',
      //       name: 'Analysis Chart'
      //     }
      //   ]
      // },
      {
        state: 'student',
        short_label: 'A',
        name: 'Students',
        type: 'sub',
        icon: 'feather icon-user',
        children: [
          {
            state: 'list',
            name: 'View Students'
          },
          {
            state: 'details',
            name: 'Add Students'
          }
        ]
      },
      {
        state: 'employee',
        short_label: 'A',
        name: 'Employees',
        type: 'sub',
        icon: 'feather icon-user',
        children: [
          {
            state: 'list',
            name: 'View Employees'
          },
          {
            state: 'add',
            name: 'Add Employees'
          },
          {
            state: 'class-mapping',
            name: 'Map Employee'
          },
        ]
      }
    ]
  },
  {
    label: 'Academic Process',
    main: [
      // {
      //   state: 'Academic',
      //   short_label: 'F',
      //   name: 'Academic',
      //   type: 'sub',
      //   icon: 'icon-layers',
      //   children: [
      //     {
      //       state: 'Classes',
      //       name: 'Classes'
      //     }, {
      //       state: 'ClassWork',
      //       name: 'ClassWork'
      //     }, {
      //       state: 'HomeWork',
      //       name: 'HomeWork'
      //     }, {
      //       state: 'Lectures',
      //       name: 'Lectures'
      //     },
      //     {
      //       state: 'Assignment',
      //       name: 'Assignment'
      //     },
      //     {
      //       state: 'UploadLecture',
      //       name: 'UploadLecture'
      //     },
      //     {
      //       state: 'Syllabus',
      //       name: 'Syllabus'
      //     },
      //     {
      //       state: 'TimeTable',
      //       name: 'TimeTable'
      //     },
      //     {
      //       state: 'Exam',
      //       name: 'Exam'
      //     },
      //   ]
      // },
      {
        state: 'class',
        short_label: 'C',
        name: 'Classes',
        type: 'sub',
        icon: 'icon-pencil-alt',
        children: [
          {
            state: 'list',
            name: 'View Classes'
          },
          {
            state: 'add',
            name: 'Add Class'
          },
        ]
      },
      {
        state: 'subject',
        short_label: 'S',
        name: 'Subjects & Mapping',
        type: 'sub',
        icon: 'icon-pencil-alt',
        children: [
          {
            state: 'list',
            name: 'View Subjets'
          },
          {
            state: 'mapping',
            name: 'Subject Mapping'
          },
          {
            state: 'teacher-mapping',
            name: 'Teacher Mapping'
          },
        ]
      },
      {
        state: 'assignment',
        short_label: 'S',
        name: 'Assignments',
        type: 'sub',
        icon: 'icon-pencil-alt',
        children: [
          {
            state: 'teacher',
            name: 'Assignment By teacher'
          },
          {
            state: 'add',
            name: 'Add Assignment'
          },
        ]
      },
      // {
      //   state: 'onlineclass',
      //   short_label: 'P',
      //   main_state: 'forms',
      //   name: 'Online Classes',
      //   type: 'sub',
      //   icon: 'icon-pencil-alt',
      //   badge: [
      //     {
      //       type: 'warning',
      //       value: 'New'
      //     }
      //   ],
      //   children: [
      //     {
      //       state: 'broadcast',
      //       name: 'Broadcast Class'
      //     }, {
      //       state: 'Senders',
      //       name: 'Senders'
      //     }, {
      //       state: 'Listeners',
      //       name: 'Listeners'
      //     }, {
      //       state: 'ViewDetails',
      //       name: 'ViewDetails'
      //     }
      //   ]
      // },
      // {
      //   state: 'Leave',
      //   short_label: 'M',
      //   main_state: 'forms',
      //   name: 'Leave',
      //   type: 'sub',
      //   icon: 'feather icon-package',
      //   children: [
      //     {
      //       state: 'StudentLeave',
      //       name: 'StudentLeave'
      //     }, {
      //       state: 'TeacherLeave',
      //       name: 'TeacherLeave'
      //     }, {
      //       state: 'EmployeeLeave',
      //       name: 'EmployeeLeave'
      //     }, {
      //       state: 'ApplyLeave',
      //       name: 'ApplyLeave'
      //     }, {
      //       state: 'Holiday',
      //       name: 'Holiday'
      //     }, {
      //       state: 'AnalysisChart',
      //       name: 'Analysis Chart'
      //     }
      //   ]
      // },
      // {
      //   state: 'Attandance',
      //   short_label: 'S',
      //   main_state: 'forms',
      //   name: 'Attandance',
      //   type: 'sub',
      //   icon: 'icon-shortcode',
      //   children: [
      //     {
      //       state: 'StudentAttandance',
      //       name: 'StudentAttandance'
      //     }, {
      //       state: 'TeacherAttandance',
      //       name: 'TeacherAttandance'
      //     }, {
      //       state: 'EmployeeAttandance',
      //       name: 'EmployeeAttandance'
      //     }, {
      //       state: 'BioMetric',
      //       name: 'BioMetric'
      //     }, {
      //       state: 'BarCode',
      //       name: 'BarCode'
      //     }, {
      //       state: 'MarkAttandance',
      //       name: 'MarkAttandance'
      //     }, {
      //       state: 'AnalysisChart',
      //       name: 'Analysis Chart'
      //     }
      //   ]
      // },
      // {
      //   state: 'Examination',
      //   short_label: 'FW',
      //   main_state: 'forms',
      //   name: 'Examination',
      //   type: 'sub',
      //   icon: 'feather icon-user',
      //   children: [
      //     {
      //       state: 'AnnualExam',
      //       name: 'AnnualExam'
      //     }, {
      //       state: 'HalfYearly',
      //       name: 'HalfYearly'
      //     }, {
      //       state: 'Quarterly',
      //       name: 'Quarterly '
      //     }, {
      //       state: 'ReportCard',
      //       name: 'ReportCard'
      //     }, {
      //       state: 'Analysis ',
      //       name: 'Analysis(Consolidated,Grace)'
      //     }, {
      //       state: 'AnalysisChart',
      //       name: 'Analysis Chart'
      //     }
      //   ]
      // }
    ]
  },
  {
    label: 'Fee',
    main: [
      {
        state: 'fee',
        short_label: 'T',
        name: 'Fee',
        type: 'sub',
        icon: 'feather icon-user',
        children: [
          {
            state: 'payment',
            name: 'Payment Collection'
          }, {
            state: 'pending-fee',
            name: 'Pending Fee'
          },
        ]
      }
    ]
  },
  // {
  //   label: 'Broardcast & Event',
  //   main: [
  //     {
  //       state: 'Broadcast',
  //       short_label: 'A',
  //       name: 'Broadcast',
  //       type: 'sub',
  //       icon: 'icon-id-badge',
  //       children: [
  //         {
  //           state: 'Circular',
  //           name: 'Circular'
  //         }, {
  //           state: 'News',
  //           name: 'News'
  //         }, {
  //           state: 'Event',
  //           name: 'Event'
  //         }, {
  //           state: 'SMS',
  //           name: 'SMS'
  //         },
  //         {
  //           state: 'Mail',
  //           name: 'Mail'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'SMS',
  //       short_label: 'A',
  //       name: 'SMS',
  //       type: 'sub',
  //       icon: 'icon-settings',
  //       children: [
  //         {
  //           state: 'Setting',
  //           name: 'Setting'
  //         }, {
  //           state: 'SendSMS',
  //           name: 'SendSMS'
  //         }, {
  //           state: 'Account',
  //           name: 'Account'
  //         }, {
  //           state: 'Schedule',
  //           name: 'Schedule'
  //         },
  //         {
  //           state: 'AnalysisChart',
  //           name: 'Analysis Chart'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'Event',
  //       short_label: 'U',
  //       name: 'Event',
  //       type: 'sub',
  //       icon: 'icon-user',
  //       children: [
  //         {
  //           state: 'EventCalendar',
  //           name: 'EventCalendar'
  //         },
  //         {
  //           state: 'Video',
  //           name: 'Video'
  //         },
  //         {
  //           state: 'Photo',
  //           name: 'Photo'
  //         },
  //         {
  //           state: 'AdEvet',
  //           name: 'Add Evet'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'Award',
  //       short_label: 'E',
  //       name: 'Award',
  //       type: 'sub',
  //       icon: 'feather icon-email',
  //       children: [
  //         {
  //           state: 'Student',
  //           name: 'Student'
  //         }, {
  //           state: 'Teacher',
  //           name: 'Teacher'
  //         }, {
  //           state: 'Employee',
  //           name: 'Employee'
  //         }, {
  //           state: 'AnalysisChart',
  //           name: 'Analysis Chart',
  //         }
  //       ]
  //     },
  //     {
  //       state: 'Alumni',
  //       short_label: 'T',
  //       name: 'Alumni',
  //       type: 'sub',
  //       icon: 'icon-check-box',
  //       children: [
  //         {
  //           state: 'Details',
  //           name: 'Details'
  //         }, {
  //           state: 'ApprovedAlumni',
  //           name: 'ApprovedAlumni'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   label: 'Help & Complain',
  //   main: [
  //     {
  //       state: 'Medical',
  //       short_label: 'B',
  //       name: 'Medical',
  //       type: 'sub',
  //       icon: 'icon-receipt',
  //       children: [
  //         {
  //           state: 'Emergency',
  //           name: 'Emergency'
  //         },
  //         {
  //           state: 'HealthCard',
  //           name: 'HealthCard'
  //         },
  //         {
  //           state: 'History',
  //           name: 'History'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'Help',
  //       short_label: 'D',
  //       name: 'Help',
  //       type: 'sub',
  //       icon: 'icon-widgetized',
  //       children: [
  //         {
  //           state: 'CreateTicket',
  //           name: 'CreateTicket'
  //         },
  //         {
  //           state: 'ViewTicket',
  //           name: 'ViewTicket'
  //         },
  //         {
  //           state: 'AnalysisChart',
  //           name: 'Analysis Chart'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'Complain',
  //       short_label: 'D',
  //       name: 'Complain',
  //       type: 'sub',
  //       icon: 'feather icon-user',
  //       children: [
  //         {
  //           state: 'CreateComplain',
  //           name: 'CreateComplain'
  //         },
  //         {
  //           state: 'History',
  //           name: 'History'
  //         },
  //         {
  //           state: 'AnalysisChart',
  //           name: 'Analysis Chart'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   label: 'Library & Fee',
  //   main: [
  //     {
  //       state: 'Library',
  //       name: 'Library',
  //       type: 'sub',
  //       icon: 'feather icon-pencil',
  //       children: [
  //         {
  //           state: 'ManageBook',
  //           name: 'ManageBook'
  //         },
  //         {
  //           state: 'IssueBook',
  //           name: 'IssueBook'
  //         },
  //         {
  //           state: 'ReturnBook',
  //           name: 'ReturnBook'
  //         },
  //         {
  //           state: 'BookTags',
  //           name: 'BookTags'
  //         },
  //         {
  //           state: 'BookBarCode',
  //           name: 'BookBarCode'
  //         },
  //         {
  //           state: 'DownloadEbook',
  //           name: 'DownloadEbook'
  //         },
  //         {
  //           state: 'AnalysisChart',
  //           name: 'Analysis Chart'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'Fee',
  //       short_label: 'I',
  //       name: 'Fee',
  //       type: 'sub',
  //       icon: 'icon-layout-media-right',
  //       children: [
  //         {
  //           state: 'ParticularHead',
  //           name: 'ParticularHead'
  //         },
  //         {
  //           state: 'FeeSchedule',
  //           name: 'FeeSchedule'
  //         },
  //         {
  //           state: 'FeeCollection',
  //           name: 'FeeCollection'
  //         },
  //         {
  //           state: 'InstallmentMaster',
  //           name: 'InstallmentMaster'
  //         },
  //         {
  //           state: 'Defaulter',
  //           name: 'Defaulter'
  //         },
  //         {
  //           state: 'Cheque',
  //           name: 'Cheque'
  //         },
  //         {
  //           state: 'CautionMoney',
  //           name: 'CautionMoney'
  //         },
  //         {
  //           state: 'Refund',
  //           name: 'Refund'
  //         },
  //         {
  //           state: 'AnalysisChart',
  //           name: 'Analysis Chart'
  //         }
  //       ]
  //     },

  //   ]
  // },
  // {
  //   label: 'Report & Analysis',
  //   main: [
  //     {
  //       state: 'Report',
  //       short_label: 'A',
  //       name: 'Report',
  //       type: 'sub',
  //       icon: 'icon-id-badge',
  //       children: [
  //         {
  //           state: 'Fee',
  //           type: 'sub',
  //           name: 'Fee',
  //           children: [
  //             {
  //               state: 'FeeReport',
  //               name: 'FeeReport',
  //               target: true
  //             },
  //             {
  //               state: 'FeeReportChart',
  //               name: 'FeeReportChart',
  //               target: true
  //             }
  //           ]
  //         },
  //         {
  //           state: 'Exam',
  //           type: 'sub',
  //           name: 'Exam',
  //           children: [
  //             {
  //               state: 'ExamReport',
  //               name: 'ExamReport',
  //               target: true
  //             },
  //             {
  //               state: 'ExamReportChart',
  //               name: 'ExamReportChart',
  //               target: true
  //             }
  //           ]
  //         },
  //         {
  //           state: 'Attandance',
  //           type: 'sub',
  //           name: 'Attandance',
  //           children: [
  //             {
  //               state: 'AttandanceReport',
  //               name: 'AttandanceReport',
  //               target: true
  //             },
  //             {
  //               state: 'AttandanceReportChart',
  //               name: 'AttandanceReportChart',
  //               target: true
  //             }
  //           ]
  //         },
  //         {
  //           state: 'Admission',
  //           type: 'sub',
  //           name: 'Admission',
  //           children: [
  //             {
  //               state: 'AdmissionReport',
  //               name: 'AdmissionReport',
  //               target: true
  //             },
  //             {
  //               state: 'AdmissionReportChart',
  //               name: 'AdmissionReportChart',
  //               target: true
  //             }
  //           ]
  //         },
  //         {
  //           state: 'Employee',
  //           type: 'sub',
  //           name: 'Employee',
  //           children: [
  //             {
  //               state: 'EmployeeReport',
  //               name: 'EmployeeReport',
  //               target: true
  //             },
  //             {
  //               state: 'EmployeeReportChart',
  //               name: 'EmployeeReportChart',
  //               target: true
  //             }
  //           ]
  //         },
  //         {
  //           state: 'Activity',
  //           type: 'sub',
  //           name: 'Activity',
  //           children: [
  //             {
  //               state: 'ActivityReport',
  //               name: 'ActivityReport',
  //               target: true
  //             },
  //             {
  //               state: 'ActivityReportChart',
  //               name: 'ActivityReportChart',
  //               target: true
  //             }
  //           ]
  //         },
  //         {
  //           state: 'Transport',
  //           type: 'sub',
  //           name: 'Transport',
  //           children: [
  //             {
  //               state: 'TransportReport',
  //               name: 'TransportReport',
  //               target: true
  //             },
  //             {
  //               state: 'TransportReportChart',
  //               name: 'TransportReportChart',
  //               target: true
  //             }
  //           ]
  //         },

  //       ]
  //     }
  //   ]
  // },
  // {
  //   label: 'Configuration',
  //   main: [
  //     {
  //       state: 'Permission',
  //       short_label: 'T',
  //       name: 'Permission',
  //       type: 'sub',
  //       icon: 'feather icon-user',
  //       children: [
  //         {
  //           state: 'Studnet',
  //           name: 'Studnet'
  //         }, {
  //           state: 'Teacher',
  //           name: 'Teacher'
  //         }, {
  //           state: 'Employee',
  //           name: 'Employee'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   label: 'Others',
  //   main: [
  //     {
  //       state: 'HRManagement',
  //       short_label: 'C',
  //       name: 'HR Management',
  //       type: 'sub',
  //       icon: 'icon-bar-chart-alt',
  //       children: [
  //          {
  //           state: 'Department',
  //           name: 'Department'
  //         }, {
  //           state: 'Designation',
  //           name: 'Designation'
  //         }, {
  //           state: 'I-Card',
  //           name: 'I-Card'
  //         }, {
  //           state: 'Documents',
  //           name: 'Documents'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'Transaport',
  //       short_label: 'M',
  //       name: 'Transaport',
  //       type: 'sub',
  //       icon: 'icon-map-alt',
  //       children: [
  //         {
  //           state: 'Routes',
  //           name: 'Routes'
  //         },
  //         {
  //           state: 'Vehicles',
  //           name: 'Vehicles'
  //         },
  //         {
  //           state: 'ManageTransport',
  //           name: 'Manage Transport'
  //         },
  //         {
  //           state: 'BusLocation',
  //           name: 'Bus Location'
  //         },
  //         {
  //           state: 'GPSTracker',
  //           name: 'GPS Tracker'
  //         },
  //         {
  //           state: 'AnalysisChart',
  //           name: 'Analysis Chart'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'Pass',
  //       short_label: 'T',
  //       name: 'Pass',
  //       type: 'sub',
  //       icon: 'icon-check-box',
  //       children: [
  //         {
  //           state: 'VisitorPass',
  //           name: 'VisitorPass'
  //         }, {
  //           state: 'GatePass',
  //           name: 'GatePass'
  //         }, {
  //           state: 'Create',
  //           name: 'Create'
  //         },
  //         {
  //           state: 'AnalysisChart',
  //           name: 'Analysis Chart'
  //         },

  //       ]
  //     },
  //     {
  //       state: 'Hostel',
  //       short_label: 'T',
  //       name: 'Hostel',
  //       type: 'sub',
  //       icon: 'icon-check-box',
  //       children: [
  //         {
  //           state: 'Rooms',
  //           name: 'Rooms'
  //         }, {
  //           state: 'Charges',
  //           name: 'Charges'
  //         }, {
  //           state: 'Apply',
  //           name: 'Apply'
  //         },
  //         {
  //           state: 'AnalysisChart',
  //           name: 'Analysis Chart'
  //         },

  //       ]
  //     },
  //     {
  //       state: 'Inventory',
  //       short_label: 'T',
  //       name: 'Inventory',
  //       type: 'sub',
  //       icon: 'icon-check-box',
  //       children: [
  //         {
  //           state: 'Stores',
  //           name: 'Stores'
  //         }, {
  //           state: 'StoreItems',
  //           name: 'StoreItems'
  //         }, {
  //           state: 'Suppliers',
  //           name: 'Suppliers'
  //         },
  //         {
  //           state: 'PurchaseOrders',
  //           name: 'PurchaseOrders'
  //         },
  //         {
  //           state: 'Sale',
  //           name: 'Sale'
  //         },
  //         {
  //           state: 'Consuption',
  //           name: 'Consuption'
  //         },
  //         {
  //           state: 'Requisition',
  //           name: 'Requisition'
  //         },

  //       ]
  //     },
  //     {
  //       state: 'Placement',
  //       short_label: 'T',
  //       name: 'Placement',
  //       type: 'sub',
  //       icon: 'icon-check-box',
  //       children: [
  //         {
  //           state: 'Companies',
  //           name: 'Companies'
  //         }, {
  //           state: 'PlacementEvent',
  //           name: 'PlacementEvent'
  //         }, {
  //           state: 'Training',
  //           name: 'Training'
  //         },
  //         {
  //           state: 'NOC Listing',
  //           name: 'NOC Listing'
  //         },
  //         {
  //           state: 'AnalysisChart',
  //           name: 'Analysis Chart'
  //         }
  //       ]
  //     },
  //   ]
  // },
];

const teacherMenus = [
  {
    label: 'Main',
    main: [
      {
        state: 'teacher',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'icon-home',
      }
    ],
  },
  {
    label: 'Academic Process',
    main: [
      // {
      //   state: 'Academic',
      //   short_label: 'F',
      //   name: 'Academic',
      //   type: 'sub',
      //   icon: 'icon-layers',
      //   children: [
      //     {
      //       state: 'Classes',
      //       name: 'Classes'
      //     }, {
      //       state: 'ClassWork',
      //       name: 'ClassWork'
      //     }, {
      //       state: 'HomeWork',
      //       name: 'HomeWork'
      //     }, {
      //       state: 'Lectures',
      //       name: 'Lectures'
      //     },
      //     {
      //       state: 'Assignment',
      //       name: 'Assignment'
      //     },
      //     {
      //       state: 'UploadLecture',
      //       name: 'UploadLecture'
      //     },
      //     {
      //       state: 'Syllabus',
      //       name: 'Syllabus'
      //     },
      //     {
      //       state: 'TimeTable',
      //       name: 'TimeTable'
      //     },
      //     {
      //       state: 'Exam',
      //       name: 'Exam'
      //     },
      //   ]
      // },
      // {
      //   state: 'class',
      //   short_label: 'C',
      //   name: 'Classes',
      //   type: 'sub',
      //   icon: 'icon-pencil-alt',
      //   children: [
      //     {
      //       state: 'list',
      //       name: 'View Classes'
      //     }, 
      //     {
      //       state: 'add',
      //       name: 'Add Class'
      //     }, 
      //   ]
      // },
      // {
      //   state: 'subject',
      //   short_label: 'S',
      //   name: 'Subjects & Mapping',
      //   type: 'sub',
      //   icon: 'icon-pencil-alt',
      //   children: [
      //     {
      //       state: 'list',
      //       name: 'View Subjets'
      //     }, 
      //     {
      //       state: 'mapping',
      //       name: 'Subject Mapping'
      //     }, 
      //   ]
      // },
      {
        state: 'assignment',
        short_label: 'S',
        name: 'Assignments',
        type: 'sub',
        icon: 'icon-pencil-alt',
        children: [
          {
            state: 'teacher',
            name: 'Assignment By teacher'
          },
          {
            state: 'add',
            name: 'Add Assignment'
          },
        ]
      },
      // {
      //   state: 'onlineclass',
      //   short_label: 'P',
      //   main_state: 'forms',
      //   name: 'Online Classes',
      //   type: 'sub',
      //   icon: 'icon-pencil-alt',
      //   badge: [
      //     {
      //       type: 'warning',
      //       value: 'New'
      //     }
      //   ],
      //   children: [
      //     {
      //       state: 'broadcast',
      //       name: 'Broadcast Class'
      //     }, {
      //       state: 'Senders',
      //       name: 'Senders'
      //     }, {
      //       state: 'Listeners',
      //       name: 'Listeners'
      //     }, {
      //       state: 'ViewDetails',
      //       name: 'ViewDetails'
      //     }
      //   ]
      // },
      // {
      //   state: 'Leave',
      //   short_label: 'M',
      //   main_state: 'forms',
      //   name: 'Leave',
      //   type: 'sub',
      //   icon: 'feather icon-package',
      //   children: [
      //     {
      //       state: 'StudentLeave',
      //       name: 'StudentLeave'
      //     }, {
      //       state: 'TeacherLeave',
      //       name: 'TeacherLeave'
      //     }, {
      //       state: 'EmployeeLeave',
      //       name: 'EmployeeLeave'
      //     }, {
      //       state: 'ApplyLeave',
      //       name: 'ApplyLeave'
      //     }, {
      //       state: 'Holiday',
      //       name: 'Holiday'
      //     }, {
      //       state: 'AnalysisChart',
      //       name: 'Analysis Chart'
      //     }
      //   ]
      // },
      // {
      //   state: 'Attandance',
      //   short_label: 'S',
      //   main_state: 'forms',
      //   name: 'Attandance',
      //   type: 'sub',
      //   icon: 'icon-shortcode',
      //   children: [
      //     {
      //       state: 'StudentAttandance',
      //       name: 'StudentAttandance'
      //     }, {
      //       state: 'TeacherAttandance',
      //       name: 'TeacherAttandance'
      //     }, {
      //       state: 'EmployeeAttandance',
      //       name: 'EmployeeAttandance'
      //     }, {
      //       state: 'BioMetric',
      //       name: 'BioMetric'
      //     }, {
      //       state: 'BarCode',
      //       name: 'BarCode'
      //     }, {
      //       state: 'MarkAttandance',
      //       name: 'MarkAttandance'
      //     }, {
      //       state: 'AnalysisChart',
      //       name: 'Analysis Chart'
      //     }
      //   ]
      // },
      // {
      //   state: 'Examination',
      //   short_label: 'FW',
      //   main_state: 'forms',
      //   name: 'Examination',
      //   type: 'sub',
      //   icon: 'feather icon-user',
      //   children: [
      //     {
      //       state: 'AnnualExam',
      //       name: 'AnnualExam'
      //     }, {
      //       state: 'HalfYearly',
      //       name: 'HalfYearly'
      //     }, {
      //       state: 'Quarterly',
      //       name: 'Quarterly '
      //     }, {
      //       state: 'ReportCard',
      //       name: 'ReportCard'
      //     }, {
      //       state: 'Analysis ',
      //       name: 'Analysis(Consolidated,Grace)'
      //     }, {
      //       state: 'AnalysisChart',
      //       name: 'Analysis Chart'
      //     }
      //   ]
      // }
    ]
  },
  // {
  //   label: 'Broardcast & Event',
  //   main: [
  //     {
  //       state: 'Broadcast',
  //       short_label: 'A',
  //       name: 'Broadcast',
  //       type: 'sub',
  //       icon: 'icon-id-badge',
  //       children: [
  //         {
  //           state: 'Circular',
  //           name: 'Circular'
  //         }, {
  //           state: 'News',
  //           name: 'News'
  //         }, {
  //           state: 'Event',
  //           name: 'Event'
  //         }, {
  //           state: 'SMS',
  //           name: 'SMS'
  //         },
  //         {
  //           state: 'Mail',
  //           name: 'Mail'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'SMS',
  //       short_label: 'A',
  //       name: 'SMS',
  //       type: 'sub',
  //       icon: 'icon-settings',
  //       children: [
  //         {
  //           state: 'Setting',
  //           name: 'Setting'
  //         }, {
  //           state: 'SendSMS',
  //           name: 'SendSMS'
  //         }, {
  //           state: 'Account',
  //           name: 'Account'
  //         }, {
  //           state: 'Schedule',
  //           name: 'Schedule'
  //         },
  //         {
  //           state: 'AnalysisChart',
  //           name: 'Analysis Chart'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'Event',
  //       short_label: 'U',
  //       name: 'Event',
  //       type: 'sub',
  //       icon: 'icon-user',
  //       children: [
  //         {
  //           state: 'EventCalendar',
  //           name: 'EventCalendar'
  //         },
  //         {
  //           state: 'Video',
  //           name: 'Video'
  //         },
  //         {
  //           state: 'Photo',
  //           name: 'Photo'
  //         },
  //         {
  //           state: 'AdEvet',
  //           name: 'Add Evet'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'Award',
  //       short_label: 'E',
  //       name: 'Award',
  //       type: 'sub',
  //       icon: 'feather icon-email',
  //       children: [
  //         {
  //           state: 'Student',
  //           name: 'Student'
  //         }, {
  //           state: 'Teacher',
  //           name: 'Teacher'
  //         }, {
  //           state: 'Employee',
  //           name: 'Employee'
  //         }, {
  //           state: 'AnalysisChart',
  //           name: 'Analysis Chart',
  //         }
  //       ]
  //     },
  //     {
  //       state: 'Alumni',
  //       short_label: 'T',
  //       name: 'Alumni',
  //       type: 'sub',
  //       icon: 'icon-check-box',
  //       children: [
  //         {
  //           state: 'Details',
  //           name: 'Details'
  //         }, {
  //           state: 'ApprovedAlumni',
  //           name: 'ApprovedAlumni'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   label: 'Help & Complain',
  //   main: [
  //     {
  //       state: 'Medical',
  //       short_label: 'B',
  //       name: 'Medical',
  //       type: 'sub',
  //       icon: 'icon-receipt',
  //       children: [
  //         {
  //           state: 'Emergency',
  //           name: 'Emergency'
  //         },
  //         {
  //           state: 'HealthCard',
  //           name: 'HealthCard'
  //         },
  //         {
  //           state: 'History',
  //           name: 'History'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'Help',
  //       short_label: 'D',
  //       name: 'Help',
  //       type: 'sub',
  //       icon: 'icon-widgetized',
  //       children: [
  //         {
  //           state: 'CreateTicket',
  //           name: 'CreateTicket'
  //         },
  //         {
  //           state: 'ViewTicket',
  //           name: 'ViewTicket'
  //         },
  //         {
  //           state: 'AnalysisChart',
  //           name: 'Analysis Chart'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'Complain',
  //       short_label: 'D',
  //       name: 'Complain',
  //       type: 'sub',
  //       icon: 'feather icon-user',
  //       children: [
  //         {
  //           state: 'CreateComplain',
  //           name: 'CreateComplain'
  //         },
  //         {
  //           state: 'History',
  //           name: 'History'
  //         },
  //         {
  //           state: 'AnalysisChart',
  //           name: 'Analysis Chart'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   label: 'Library',
  //   main: [
  //     {
  //       state: 'Library',
  //       name: 'Library',
  //       type: 'sub',
  //       icon: 'feather icon-pencil',
  //       children: [
  //         {
  //           state: 'ManageBook',
  //           name: 'ManageBook'
  //         },
  //         {
  //           state: 'IssueBook',
  //           name: 'IssueBook'
  //         },
  //         {
  //           state: 'ReturnBook',
  //           name: 'ReturnBook'
  //         },
  //         {
  //           state: 'BookTags',
  //           name: 'BookTags'
  //         },
  //         {
  //           state: 'BookBarCode',
  //           name: 'BookBarCode'
  //         },
  //         {
  //           state: 'DownloadEbook',
  //           name: 'DownloadEbook'
  //         },
  //         {
  //           state: 'AnalysisChart',
  //           name: 'Analysis Chart'
  //         }
  //       ]
  //     }

  //   ]
  // },
  // {
  //   label: 'Report & Analysis',
  //   main: [
  //     {
  //       state: 'Report',
  //       short_label: 'A',
  //       name: 'Report',
  //       type: 'sub',
  //       icon: 'icon-id-badge',
  //       children: [
  //         {
  //           state: 'Fee',
  //           type: 'sub',
  //           name: 'Fee',
  //           children: [
  //             {
  //               state: 'FeeReport',
  //               name: 'FeeReport',
  //               target: true
  //             },
  //             {
  //               state: 'FeeReportChart',
  //               name: 'FeeReportChart',
  //               target: true
  //             }
  //           ]
  //         },
  //         {
  //           state: 'Exam',
  //           type: 'sub',
  //           name: 'Exam',
  //           children: [
  //             {
  //               state: 'ExamReport',
  //               name: 'ExamReport',
  //               target: true
  //             },
  //             {
  //               state: 'ExamReportChart',
  //               name: 'ExamReportChart',
  //               target: true
  //             }
  //           ]
  //         },
  //         {
  //           state: 'Attandance',
  //           type: 'sub',
  //           name: 'Attandance',
  //           children: [
  //             {
  //               state: 'AttandanceReport',
  //               name: 'AttandanceReport',
  //               target: true
  //             },
  //             {
  //               state: 'AttandanceReportChart',
  //               name: 'AttandanceReportChart',
  //               target: true
  //             }
  //           ]
  //         },
  //         {
  //           state: 'Admission',
  //           type: 'sub',
  //           name: 'Admission',
  //           children: [
  //             {
  //               state: 'AdmissionReport',
  //               name: 'AdmissionReport',
  //               target: true
  //             },
  //             {
  //               state: 'AdmissionReportChart',
  //               name: 'AdmissionReportChart',
  //               target: true
  //             }
  //           ]
  //         },
  //         {
  //           state: 'Employee',
  //           type: 'sub',
  //           name: 'Employee',
  //           children: [
  //             {
  //               state: 'EmployeeReport',
  //               name: 'EmployeeReport',
  //               target: true
  //             },
  //             {
  //               state: 'EmployeeReportChart',
  //               name: 'EmployeeReportChart',
  //               target: true
  //             }
  //           ]
  //         },
  //         {
  //           state: 'Activity',
  //           type: 'sub',
  //           name: 'Activity',
  //           children: [
  //             {
  //               state: 'ActivityReport',
  //               name: 'ActivityReport',
  //               target: true
  //             },
  //             {
  //               state: 'ActivityReportChart',
  //               name: 'ActivityReportChart',
  //               target: true
  //             }
  //           ]
  //         },
  //         {
  //           state: 'Transport',
  //           type: 'sub',
  //           name: 'Transport',
  //           children: [
  //             {
  //               state: 'TransportReport',
  //               name: 'TransportReport',
  //               target: true
  //             },
  //             {
  //               state: 'TransportReportChart',
  //               name: 'TransportReportChart',
  //               target: true
  //             }
  //           ]
  //         },

  //       ]
  //     }
  //   ]
  // }
];

const studentMenus = [
  {
    label: 'Main',
    main: [
      {
        state: 'student',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'icon-home',
      }
    ],
  },
  {
    label: 'Academic',
    main: [
      {
        state: 'assignment',
        short_label: 'S',
        name: 'Assignment',
        type: 'sub',
        icon: 'icon-pencil-alt',
        children: [
          {
            state: 'student',
            name: 'My Assignment'
          },
          {
            state: 'student-assessment',
            name: 'Assignment Result'
          },
        ]
      },

      // {
      //   state: 'Leave',
      //   short_label: 'M',
      //   main_state: 'forms',
      //   name: 'Leave',
      //   type: 'sub',
      //   icon: 'feather icon-package',
      //   children: [
      //     {
      //       state: 'StudentLeave',
      //       name: 'My Leave'
      //     }, {
      //       state: 'ApplyLeave',
      //       name: 'Apply Leave'
      //     }, {
      //       state: 'Holiday',
      //       name: 'Holidays'
      //     }, 
      //   ]
      // },
      // {
      //   state: 'Attandance',
      //   short_label: 'S',
      //   main_state: 'forms',
      //   name: 'Attandance',
      //   type: 'sub',
      //   icon: 'icon-shortcode',
      //   children: [
      //     {
      //       state: 'StudentAttandance',
      //       name: 'My Attandance'
      //     }, {
      //       state: 'BioMetric',
      //       name: 'Bio Metric'
      //     }, {
      //       state: 'BarCode',
      //       name: 'Bar Code'
      //     }, {
      //       state: 'MarkAttandance',
      //       name: 'Mark Attandance'
      //     }, 
      //   ]
      // },
      // {
      //   state: 'Examination',
      //   short_label: 'FW',
      //   main_state: 'forms',
      //   name: 'Examination',
      //   type: 'sub',
      //   icon: 'feather icon-user',
      //   children: [
      //     {
      //       state: 'AnnualExam',
      //       name: 'Annual Exam'
      //     }, {
      //       state: 'HalfYearly',
      //       name: 'Half Yearly'
      //     }, {
      //       state: 'Quarterly',
      //       name: 'Quarterly '
      //     }, {
      //       state: 'ReportCard',
      //       name: 'Report Card'
      //     }, 
      //   ]
      // }
    ]
  },
  {
    label: 'Fee',
    main: [
      {
        state: 'fee',
        short_label: 'T',
        name: 'Fee',
        type: 'sub',
        icon: 'feather icon-user',
        children: [
          {
            state: 'payment-student',
            name: 'Payment History'
          },
        ]
      }
    ]
  },
  // {
  //   label: 'Broardcast & Event',
  //   main: [
  //     {
  //       state: 'Broadcast',
  //       short_label: 'A',
  //       name: 'Broadcast',
  //       type: 'sub',
  //       icon: 'icon-id-badge',
  //       children: [
  //         {
  //           state: 'Circular',
  //           name: 'Circular'
  //         }, {
  //           state: 'News',
  //           name: 'News'
  //         }, {
  //           state: 'Event',
  //           name: 'Event'
  //         }, {
  //           state: 'SMS',
  //           name: 'SMS'
  //         },
  //         {
  //           state: 'Mail',
  //           name: 'Mail'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'Event',
  //       short_label: 'U',
  //       name: 'Event',
  //       type: 'sub',
  //       icon: 'icon-user',
  //       children: [
  //         {
  //           state: 'EventCalendar',
  //           name: 'EventCalendar'
  //         },
  //         {
  //           state: 'Video',
  //           name: 'Video'
  //         },
  //         {
  //           state: 'Photo',
  //           name: 'Photo'
  //         },
  //         {
  //           state: 'AdEvet',
  //           name: 'Add Evet'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'Award',
  //       short_label: 'E',
  //       name: 'Award',
  //       type: 'sub',
  //       icon: 'feather icon-email',
  //       children: [
  //         {
  //           state: 'Student',
  //           name: 'Student'
  //         }, {
  //           state: 'Teacher',
  //           name: 'Teacher'
  //         }, {
  //           state: 'Employee',
  //           name: 'Employee'
  //         }, {
  //           state: 'AnalysisChart',
  //           name: 'Analysis Chart',
  //         }
  //       ]
  //     },
  //     {
  //       state: 'Alumni',
  //       short_label: 'T',
  //       name: 'Alumni',
  //       type: 'sub',
  //       icon: 'icon-check-box',
  //       children: [
  //         {
  //           state: 'Details',
  //           name: 'Details'
  //         }, {
  //           state: 'ApprovedAlumni',
  //           name: 'ApprovedAlumni'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   label: 'Help & Complain',
  //   main: [
  //     {
  //       state: 'Medical',
  //       short_label: 'B',
  //       name: 'Medical',
  //       type: 'sub',
  //       icon: 'icon-receipt',
  //       children: [
  //         {
  //           state: 'Emergency',
  //           name: 'Emergency'
  //         },
  //         {
  //           state: 'HealthCard',
  //           name: 'HealthCard'
  //         },
  //         {
  //           state: 'History',
  //           name: 'History'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'Help',
  //       short_label: 'D',
  //       name: 'Help',
  //       type: 'sub',
  //       icon: 'icon-widgetized',
  //       children: [
  //         {
  //           state: 'CreateTicket',
  //           name: 'CreateTicket'
  //         },
  //         {
  //           state: 'ViewTicket',
  //           name: 'ViewTicket'
  //         },
  //         {
  //           state: 'AnalysisChart',
  //           name: 'Analysis Chart'
  //         }
  //       ]
  //     },
  //     {
  //       state: 'Complain',
  //       short_label: 'D',
  //       name: 'Complain',
  //       type: 'sub',
  //       icon: 'feather icon-user',
  //       children: [
  //         {
  //           state: 'CreateComplain',
  //           name: 'CreateComplain'
  //         },
  //         {
  //           state: 'History',
  //           name: 'History'
  //         },
  //         {
  //           state: 'AnalysisChart',
  //           name: 'Analysis Chart'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   label: 'Library',
  //   main: [
  //     {
  //       state: 'Library',
  //       name: 'Library',
  //       type: 'sub',
  //       icon: 'feather icon-pencil',
  //       children: [
  //         {
  //           state: 'ManageBook',
  //           name: 'ManageBook'
  //         },
  //         {
  //           state: 'IssueBook',
  //           name: 'IssueBook'
  //         },
  //         {
  //           state: 'ReturnBook',
  //           name: 'ReturnBook'
  //         },
  //         {
  //           state: 'BookTags',
  //           name: 'BookTags'
  //         },
  //         {
  //           state: 'BookBarCode',
  //           name: 'BookBarCode'
  //         },
  //         {
  //           state: 'DownloadEbook',
  //           name: 'DownloadEbook'
  //         },
  //         {
  //           state: 'AnalysisChart',
  //           name: 'Analysis Chart'
  //         }
  //       ]
  //     }

  //   ]
  // }
];

@Injectable()
export class MenuItems {

  constructor(private authService: AuthService) {

  }



  getAll(): Menu[] {
    if (Role.Owner.indexOf(this.authService.currentUserValue.role) !== -1) {
      return ownerMenu;
    }
    else if (Role.Admin.indexOf(this.authService.currentUserValue.role) !== -1) {
      return adminMenus;
    }
    else if (Role.Teacher.indexOf(this.authService.currentUserValue.role) !== -1) {
      return teacherMenus;
    }
    else if (Role.Student.indexOf(this.authService.currentUserValue.role) !== -1) {
      return studentMenus;
    }
    else {
      return teacherMenus;
    }

  }
}
