import React, { useState, useMemo } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, TrendingUp, DollarSign, Users, CheckCircle, AlertCircle, Clock, BookOpen, GraduationCap, UserCheck, Globe, Plus, Edit2, Trash2, X, Save, BarChart3, Table } from 'lucide-react';

const TCADashboard = () => {
  // State Management
  const [weeklyPlanData, setWeeklyPlanData] = useState([
    { id: 1, taskName: 'A1.1 Course Start', assignedTo: 'Prof. Schmidt', week: 'Week 1', status: 'Done', priority: 'High', startDate: '2025-01-01', endDate: '2025-01-05', courseLevel: 'A1.1' },
    { id: 2, taskName: 'B1 Grammar Workshop', assignedTo: 'Prof. Müller', week: 'Week 1', status: 'Done', priority: 'High', startDate: '2025-01-02', endDate: '2025-01-02', courseLevel: 'B1' },
    { id: 3, taskName: 'A2 Exam Preparation', assignedTo: 'Prof. Weber', week: 'Week 2', status: 'Pending', priority: 'High', startDate: '2025-01-08', endDate: '2025-01-12', courseLevel: 'A2' },
    { id: 4, taskName: 'B2 Conversation Class', assignedTo: 'Prof. Fischer', week: 'Week 2', status: 'In Progress', priority: 'Medium', startDate: '2025-01-09', endDate: '2025-01-15', courseLevel: 'B2' },
    { id: 5, taskName: 'C1 Literature Review', assignedTo: 'Prof. Schmidt', week: 'Week 3', status: 'Done', priority: 'Medium', startDate: '2025-01-15', endDate: '2025-01-17', courseLevel: 'C1' },
    { id: 6, taskName: 'A1.2 Placement Tests', assignedTo: 'Prof. Müller', week: 'Week 3', status: 'Pending', priority: 'High', startDate: '2025-01-16', endDate: '2025-01-22', courseLevel: 'A1.2' },
  ]);

  const [financialData, setFinancialData] = useState([
    { id: 1, date: '2025-01-05', type: 'Income', category: 'Course Fees', amount: 12500, description: 'A1-A2 Course enrollments' },
    { id: 2, date: '2025-01-10', type: 'Expense', category: 'Professor Salaries', amount: 8000, description: 'Monthly professor payments' },
    { id: 3, date: '2025-01-12', type: 'Income', category: 'Course Fees', amount: 15000, description: 'B1-B2 Course enrollments' },
    { id: 4, date: '2025-01-15', type: 'Expense', category: 'Learning Materials', amount: 2500, description: 'Textbooks and resources' },
    { id: 5, date: '2025-01-18', type: 'Expense', category: 'Facility Rent', amount: 3000, description: 'Academy rent' },
    { id: 6, date: '2025-01-20', type: 'Income', category: 'Exam Fees', amount: 4500, description: 'Goethe exam registrations' },
    { id: 7, date: '2025-01-25', type: 'Expense', category: 'Marketing', amount: 1800, description: 'Social media ads' },
    { id: 8, date: '2025-01-28', type: 'Income', category: 'Private Lessons', amount: 3200, description: 'One-on-one tutoring' },
  ]);

  const [studentsData, setStudentsData] = useState([
    { id: 1, name: 'Ahmed Ben Ali', status: 'Paid', amount: 2500, date: '2025-01-10', level: 'A1.1', group: 'Group A', country: 'Tunisia', nextPayment: '2025-02-10' },
    { id: 2, name: 'Fatima Trabelsi', status: 'Paid', amount: 2800, date: '2025-01-12', level: 'A2', group: 'Group B', country: 'Tunisia', nextPayment: '2025-02-12' },
    { id: 3, name: 'Mohamed Hamdi', status: 'Unpaid', amount: 3000, date: '2025-01-15', level: 'B1', group: 'Group C', country: 'Tunisia', nextPayment: '2025-01-15' },
    { id: 4, name: 'Sara Jebali', status: 'Paid', amount: 2500, date: '2025-01-18', level: 'A1.2', group: 'Group A', country: 'Tunisia', nextPayment: '2025-02-18' },
    { id: 5, name: 'Youssef Mejri', status: 'Partial', amount: 1500, date: '2025-01-20', level: 'B2', group: 'Group D', country: 'Tunisia', nextPayment: '2025-01-25' },
    { id: 6, name: 'Leila Sfar', status: 'Paid', amount: 2800, date: '2025-01-22', level: 'A2', group: 'Group B', country: 'Tunisia', nextPayment: '2025-02-22' },
    { id: 7, name: 'Karim Gharbi', status: 'Unpaid', amount: 3500, date: '2025-01-25', level: 'C1', group: 'Group E', country: 'Tunisia', nextPayment: '2025-01-25' },
    { id: 8, name: 'Nour Bouzid', status: 'Paid', amount: 2500, date: '2025-01-27', level: 'A1.1', group: 'Group A', country: 'Tunisia', nextPayment: '2025-02-27' },
  ]);

  const [professorsData, setProfessorsData] = useState([
    { id: 1, name: 'Prof. Schmidt', specialization: 'A1-A2', activeGroups: 3, totalStudents: 45, hoursPerWeek: 20, status: 'Active' },
    { id: 2, name: 'Prof. Müller', specialization: 'B1-B2', activeGroups: 2, totalStudents: 30, hoursPerWeek: 16, status: 'Active' },
    { id: 3, name: 'Prof. Weber', specialization: 'A2-B1', activeGroups: 2, totalStudents: 28, hoursPerWeek: 15, status: 'Active' },
    { id: 4, name: 'Prof. Fischer', specialization: 'B2-C1', activeGroups: 2, totalStudents: 24, hoursPerWeek: 14, status: 'Active' },
    { id: 5, name: 'Prof. Wagner', specialization: 'A1', activeGroups: 1, totalStudents: 15, hoursPerWeek: 10, status: 'On Leave' },
  ]);

  const [groupsData, setGroupsData] = useState([
    { id: 1, groupName: 'Group A', level: 'A1.1', professor: 'Prof. Schmidt', students: 15, schedule: 'Mon/Wed 18:00', capacity: 20, status: 'Active' },
    { id: 2, groupName: 'Group B', level: 'A2', professor: 'Prof. Müller', students: 18, schedule: 'Tue/Thu 18:00', capacity: 20, status: 'Active' },
    { id: 3, groupName: 'Group C', level: 'B1', professor: 'Prof. Weber', students: 14, schedule: 'Mon/Wed 19:30', capacity: 15, status: 'Active' },
    { id: 4, groupName: 'Group D', level: 'B2', professor: 'Prof. Fischer', students: 12, schedule: 'Sat 09:00', capacity: 15, status: 'Active' },
    { id: 5, groupName: 'Group E', level: 'C1', professor: 'Prof. Schmidt', students: 10, schedule: 'Sat 14:00', capacity: 12, status: 'Active' },
    { id: 6, groupName: 'Group F', level: 'A1.2', professor: 'Prof. Müller', students: 8, schedule: 'Sun 10:00', capacity: 20, status: 'Filling' },
  ]);

  const [consultationsData, setConsultationsData] = useState([
    { id: 1, prospectName: 'Amira Mansour', phone: '+216 98 123 456', email: 'amira.m@email.com', consultationDate: '2025-01-15', consultationTime: '10:00', status: 'Scheduled', advisor: 'Sara Ben Ahmed', interest: 'A1 Course', source: 'Facebook', notes: 'Interested in intensive course' },
    { id: 2, prospectName: 'Mehdi Gharbi', phone: '+216 22 456 789', email: 'mehdi.g@email.com', consultationDate: '2025-01-12', consultationTime: '14:00', status: 'Completed', advisor: 'Youssef Trabelsi', interest: 'B1 Course', source: 'Website', notes: 'Has basic German knowledge', followUp: 'Enrolled' },
    { id: 3, prospectName: 'Salma Jebali', phone: '+216 55 789 012', email: 'salma.j@email.com', consultationDate: '2025-01-18', consultationTime: '11:30', status: 'Scheduled', advisor: 'Sara Ben Ahmed', interest: 'A2 Course', source: 'Instagram', notes: 'Looking for evening classes' },
    { id: 4, prospectName: 'Karim Bouazizi', phone: '+216 24 345 678', email: 'karim.b@email.com', consultationDate: '2025-01-10', consultationTime: '15:00', status: 'Completed', advisor: 'Youssef Trabelsi', interest: 'C1 Course', source: 'Referral', notes: 'Preparing for university', followUp: 'Enrolled' },
  ]);

  // Modal & View States
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [modalAction, setModalAction] = useState('add');
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedWeek, setSelectedWeek] = useState('all');

  // Metrics Calculations
  const weeklyMetrics = useMemo(() => {
    const filtered = selectedWeek === 'all' ? weeklyPlanData : weeklyPlanData.filter(t => t.week === selectedWeek);
    const total = filtered.length;
    const completed = filtered.filter(t => t.status === 'Done').length;
    const pending = filtered.filter(t => t.status === 'Pending').length;
    const completionRate = total > 0 ? ((completed / total) * 100).toFixed(1) : 0;
    
    const avgDuration = filtered.reduce((acc, task) => {
      const start = new Date(task.startDate);
      const end = new Date(task.endDate);
      const days = (end - start) / (1000 * 60 * 60 * 24);
      return acc + days;
    }, 0) / (total || 1);

    return { total, completed, pending, completionRate, avgDuration: avgDuration.toFixed(1) };
  }, [weeklyPlanData, selectedWeek]);

  const financialMetrics = useMemo(() => {
    const income = financialData.filter(t => t.type === 'Income').reduce((sum, t) => sum + t.amount, 0);
    const expenses = financialData.filter(t => t.type === 'Expense').reduce((sum, t) => sum + t.amount, 0);
    const balance = income - expenses;

    const expensesByCategory = financialData
      .filter(t => t.type === 'Expense')
      .reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount;
        return acc;
      }, {});

    const incomeByCategory = financialData
      .filter(t => t.type === 'Income')
      .reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount;
        return acc;
      }, {});

    return { income, expenses, balance, expensesByCategory, incomeByCategory };
  }, [financialData]);

  const studentsMetrics = useMemo(() => {
    const total = studentsData.length;
    const paid = studentsData.filter(c => c.status === 'Paid').length;
    const unpaid = studentsData.filter(c => c.status === 'Unpaid').length;
    const partial = studentsData.filter(c => c.status === 'Partial').length;
    const totalPaid = studentsData.filter(c => c.status === 'Paid').reduce((sum, c) => sum + c.amount, 0);
    const paymentRate = total > 0 ? ((paid / total) * 100).toFixed(1) : 0;

    return { total, paid, unpaid, partial, totalPaid, paymentRate };
  }, [studentsData]);

  const professorsMetrics = useMemo(() => {
    const total = professorsData.length;
    const active = professorsData.filter(p => p.status === 'Active').length;
    const totalStudents = professorsData.reduce((sum, p) => sum + p.totalStudents, 0);
    const totalHours = professorsData.reduce((sum, p) => sum + p.hoursPerWeek, 0);
    const avgStudentsPerProf = active > 0 ? (totalStudents / active).toFixed(0) : 0;

    return { total, active, totalStudents, totalHours, avgStudentsPerProf };
  }, [professorsData]);

  const groupsMetrics = useMemo(() => {
    const total = groupsData.length;
    const active = groupsData.filter(g => g.status === 'Active').length;
    const totalStudents = groupsData.reduce((sum, g) => sum + g.students, 0);
    const totalCapacity = groupsData.reduce((sum, g) => sum + g.capacity, 0);
    const utilizationRate = totalCapacity > 0 ? ((totalStudents / totalCapacity) * 100).toFixed(1) : 0;

    return { total, active, totalStudents, totalCapacity, utilizationRate };
  }, [groupsData]);

  const consultationsMetrics = useMemo(() => {
    const total = consultationsData.length;
    const scheduled = consultationsData.filter(c => c.status === 'Scheduled').length;
    const completed = consultationsData.filter(c => c.status === 'Completed').length;
    const enrolled = consultationsData.filter(c => c.followUp === 'Enrolled').length;
    const conversionRate = completed > 0 ? ((enrolled / completed) * 100).toFixed(1) : 0;
    return { total, scheduled, completed, enrolled, conversionRate };
  }, [consultationsData]);

  // Chart Data
  const tasksByWeek = useMemo(() => {
    const weeks = {};
    weeklyPlanData.forEach(task => {
      if (!weeks[task.week]) weeks[task.week] = { week: task.week, completed: 0, pending: 0, inProgress: 0 };
      if (task.status === 'Done') weeks[task.week].completed++;
      else if (task.status === 'Pending') weeks[task.week].pending++;
      else weeks[task.week].inProgress++;
    });
    return Object.values(weeks);
  }, [weeklyPlanData]);

  const statusDistribution = useMemo(() => {
    const dist = { Done: 0, Pending: 0, 'In Progress': 0 };
    weeklyPlanData.forEach(task => dist[task.status]++);
    return Object.entries(dist).map(([name, value]) => ({ name, value }));
  }, [weeklyPlanData]);

  const monthlyFinancial = useMemo(() => {
    const months = {};
    financialData.forEach(t => {
      const month = t.date.substring(0, 7);
      if (!months[month]) months[month] = { month, income: 0, expenses: 0 };
      if (t.type === 'Income') months[month].income += t.amount;
      else months[month].expenses += t.amount;
    });
    return Object.values(months);
  }, [financialData]);

  const incomeChart = useMemo(() => {
    return Object.entries(financialMetrics.incomeByCategory).map(([name, value]) => ({ name, value }));
  }, [financialMetrics]);

  const expensesChart = useMemo(() => {
    return Object.entries(financialMetrics.expensesByCategory).map(([name, value]) => ({ name, value }));
  }, [financialMetrics]);

  const paymentStatus = useMemo(() => [
    { name: 'Paid', value: studentsMetrics.paid },
    { name: 'Unpaid', value: studentsMetrics.unpaid },
    { name: 'Partial', value: studentsMetrics.partial }
  ], [studentsMetrics]);

  const studentsByLevel = useMemo(() => {
    const levels = {};
    studentsData.forEach(s => {
      if (!levels[s.level]) levels[s.level] = 0;
      levels[s.level]++;
    });
    return Object.entries(levels).map(([name, value]) => ({ name, value })).sort((a, b) => {
      const order = ['A1.1', 'A1.2', 'A2', 'B1', 'B2', 'C1'];
      return order.indexOf(a.name) - order.indexOf(b.name);
    });
  }, [studentsData]);

  const professorWorkload = useMemo(() => {
    return professorsData.map(p => ({
      name: p.name.replace('Prof. ', ''),
      students: p.totalStudents,
      hours: p.hoursPerWeek,
      groups: p.activeGroups
    }));
  }, [professorsData]);

  const groupCapacity = useMemo(() => {
    return groupsData.map(g => ({
      name: g.groupName,
      enrolled: g.students,
      capacity: g.capacity,
      available: g.capacity - g.students
    }));
  }, [groupsData]);

  // CRUD Operations
  const openAddModal = (type) => {
    setModalType(type);
    setModalAction('add');
    setEditingItem(null);
    setFormData({});
    setShowModal(true);
  };

  const openEditModal = (type, item) => {
    setModalType(type);
    setModalAction('edit');
    setEditingItem(item);
    setFormData(item);
    setShowModal(true);
  };

  const handleDelete = (type, id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    
    switch(type) {
      case 'task':
        setWeeklyPlanData(weeklyPlanData.filter(item => item.id !== id));
        break;
      case 'financial':
        setFinancialData(financialData.filter(item => item.id !== id));
        break;
      case 'student':
        setStudentsData(studentsData.filter(item => item.id !== id));
        break;
      case 'professor':
        setProfessorsData(professorsData.filter(item => item.id !== id));
        break;
      case 'group':
        setGroupsData(groupsData.filter(item => item.id !== id));
        break;
      case 'consultation':
        setConsultationsData(consultationsData.filter(item => item.id !== id));
        break;
    }
  };

  const handleSave = () => {
    const newId = Date.now();
    
    switch(modalType) {
      case 'task':
        if (modalAction === 'add') {
          setWeeklyPlanData([...weeklyPlanData, { ...formData, id: newId }]);
        } else {
          setWeeklyPlanData(weeklyPlanData.map(item => item.id === editingItem.id ? formData : item));
        }
        break;
      case 'financial':
        if (modalAction === 'add') {
          setFinancialData([...financialData, { ...formData, id: newId, amount: parseFloat(formData.amount) }]);
        } else {
          setFinancialData(financialData.map(item => item.id === editingItem.id ? { ...formData, amount: parseFloat(formData.amount) } : item));
        }
        break;
      case 'student':
        if (modalAction === 'add') {
          setStudentsData([...studentsData, { ...formData, id: newId, amount: parseFloat(formData.amount) }]);
        } else {
          setStudentsData(studentsData.map(item => item.id === editingItem.id ? { ...formData, amount: parseFloat(formData.amount) } : item));
        }
        break;
      case 'professor':
        if (modalAction === 'add') {
          setProfessorsData([...professorsData, { ...formData, id: newId, activeGroups: parseInt(formData.activeGroups), totalStudents: parseInt(formData.totalStudents), hoursPerWeek: parseInt(formData.hoursPerWeek) }]);
        } else {
          setProfessorsData(professorsData.map(item => item.id === editingItem.id ? { ...formData, activeGroups: parseInt(formData.activeGroups), totalStudents: parseInt(formData.totalStudents), hoursPerWeek: parseInt(formData.hoursPerWeek) } : item));
        }
        break;
      case 'group':
        if (modalAction === 'add') {
          setGroupsData([...groupsData, { ...formData, id: newId, students: parseInt(formData.students), capacity: parseInt(formData.capacity) }]);
        } else {
          setGroupsData(groupsData.map(item => item.id === editingItem.id ? { ...formData, students: parseInt(formData.students), capacity: parseInt(formData.capacity) } : item));
        }
        break;
      case 'consultation':
        if (modalAction === 'add') {
          setConsultationsData([...consultationsData, { ...formData, id: newId }]);
        } else {
          setConsultationsData(consultationsData.map(item => item.id === editingItem.id ? formData : item));
        }
        break;
    }
    
    setShowModal(false);
    setFormData({});
  };

  const COLORS = ['#4285F4', '#34A853', '#FBBC04', '#EA4335', '#9C27B0', '#00BCD4', '#FF5722', '#607D8B'];

  // Modal Component
  const Modal = () => {
    if (!showModal) return null;

    const renderFormFields = () => {
      switch(modalType) {
        case 'task':
          return (
            <>
              <input className="w-full px-4 py-2 border rounded-lg" placeholder="Task Name" value={formData.taskName || ''} onChange={(e) => setFormData({...formData, taskName: e.target.value})} />
              <input className="w-full px-4 py-2 border rounded-lg" placeholder="Assigned To" value={formData.assignedTo || ''} onChange={(e) => setFormData({...formData, assignedTo: e.target.value})} />
              <select className="w-full px-4 py-2 border rounded-lg" value={formData.week || ''} onChange={(e) => setFormData({...formData, week: e.target.value})}>
                <option value="">Select Week</option>
                <option value="Week 1">Week 1</option>
                <option value="Week 2">Week 2</option>
                <option value="Week 3">Week 3</option>
              </select>
              <select className="w-full px-4 py-2 border rounded-lg" value={formData.status || ''} onChange={(e) => setFormData({...formData, status: e.target.value})}>
                <option value="">Select Status</option>
                <option value="Done">Done</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
              </select>
              <select className="w-full px-4 py-2 border rounded-lg" value={formData.priority || ''} onChange={(e) => setFormData({...formData, priority: e.target.value})}>
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <select className="w-full px-4 py-2 border rounded-lg" value={formData.courseLevel || ''} onChange={(e) => setFormData({...formData, courseLevel: e.target.value})}>
                <option value="">Select Course Level</option>
                <option value="A1.1">A1.1</option>
                <option value="A1.2">A1.2</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="C1">C1</option>
              </select>
              <input type="date" className="w-full px-4 py-2 border rounded-lg" value={formData.startDate || ''} onChange={(e) => setFormData({...formData, startDate: e.target.value})} />
              <input type="date" className="w-full px-4 py-2 border rounded-lg" value={formData.endDate || ''} onChange={(e) => setFormData({...formData, endDate: e.target.value})} />
            </>
          );
        case 'financial':
          return (
            <>
              <input type="date" className="w-full px-4 py-2 border rounded-lg" placeholder="Date" value={formData.date || ''} onChange={(e) => setFormData({...formData, date: e.target.value})} />
              <select className="w-full px-4 py-2 border rounded-lg" value={formData.type || ''} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                <option value="">Select Type</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
              <input className="w-full px-4 py-2 border rounded-lg" placeholder="Category" value={formData.category || ''} onChange={(e) => setFormData({...formData, category: e.target.value})} />
              <input type="number" className="w-full px-4 py-2 border rounded-lg" placeholder="Amount (DT)" value={formData.amount || ''} onChange={(e) => setFormData({...formData, amount: e.target.value})} />
              <textarea className="w-full px-4 py-2 border rounded-lg" placeholder="Description" value={formData.description || ''} onChange={(e) => setFormData({...formData, description: e.target.value})} />
            </>
          );
        case 'student':
          return (
            <>
              <input className="w-full px-4 py-2 border rounded-lg" placeholder="Student Name" value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <select className="w-full px-4 py-2 border rounded-lg" value={formData.level || ''} onChange={(e) => setFormData({...formData, level: e.target.value})}>
                <option value="">Select Level</option>
                <option value="A1.1">A1.1</option>
                <option value="A1.2">A1.2</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="C1">C1</option>
              </select>
              <input className="w-full px-4 py-2 border rounded-lg" placeholder="Group" value={formData.group || ''} onChange={(e) => setFormData({...formData, group: e.target.value})} />
              <select className="w-full px-4 py-2 border rounded-lg" value={formData.status || ''} onChange={(e) => setFormData({...formData, status: e.target.value})}>
                <option value="">Payment Status</option>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
                <option value="Partial">Partial</option>
              </select>
              <input type="number" className="w-full px-4 py-2 border rounded-lg" placeholder="Amount (DT)" value={formData.amount || ''} onChange={(e) => setFormData({...formData, amount: e.target.value})} />
              <input type="date" className="w-full px-4 py-2 border rounded-lg" placeholder="Payment Date" value={formData.date || ''} onChange={(e) => setFormData({...formData, date: e.target.value})} />
              <input type="date" className="w-full px-4 py-2 border rounded-lg" placeholder="Next Payment" value={formData.nextPayment || ''} onChange={(e) => setFormData({...formData, nextPayment: e.target.value})} />
            </>
          );
        case 'professor':
          return (
            <>
              <input className="w-full px-4 py-2 border rounded-lg" placeholder="Professor Name" value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <input className="w-full px-4 py-2 border rounded-lg" placeholder="Specialization (e.g., A1-A2)" value={formData.specialization || ''} onChange={(e) => setFormData({...formData, specialization: e.target.value})} />
              <input type="number" className="w-full px-4 py-2 border rounded-lg" placeholder="Active Groups" value={formData.activeGroups || ''} onChange={(e) => setFormData({...formData, activeGroups: e.target.value})} />
              <input type="number" className="w-full px-4 py-2 border rounded-lg" placeholder="Total Students" value={formData.totalStudents || ''} onChange={(e) => setFormData({...formData, totalStudents: e.target.value})} />
              <input type="number" className="w-full px-4 py-2 border rounded-lg" placeholder="Hours Per Week" value={formData.hoursPerWeek || ''} onChange={(e) => setFormData({...formData, hoursPerWeek: e.target.value})} />
              <select className="w-full px-4 py-2 border rounded-lg" value={formData.status || ''} onChange={(e) => setFormData({...formData, status: e.target.value})}>
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
              </select>
            </>
          );
        case 'group':
          return (
            <>
              <input className="w-full px-4 py-2 border rounded-lg" placeholder="Group Name" value={formData.groupName || ''} onChange={(e) => setFormData({...formData, groupName: e.target.value})} />
              <select className="w-full px-4 py-2 border rounded-lg" value={formData.level || ''} onChange={(e) => setFormData({...formData, level: e.target.value})}>
                <option value="">Select Level</option>
                <option value="A1.1">A1.1</option>
                <option value="A1.2">A1.2</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="C1">C1</option>
              </select>
              <input className="w-full px-4 py-2 border rounded-lg" placeholder="Professor" value={formData.professor || ''} onChange={(e) => setFormData({...formData, professor: e.target.value})} />
              <input type="number" className="w-full px-4 py-2 border rounded-lg" placeholder="Current Students" value={formData.students || ''} onChange={(e) => setFormData({...formData, students: e.target.value})} />
              <input type="number" className="w-full px-4 py-2 border rounded-lg" placeholder="Capacity" value={formData.capacity || ''} onChange={(e) => setFormData({...formData, capacity: e.target.value})} />
              <input className="w-full px-4 py-2 border rounded-lg" placeholder="Schedule (e.g., Mon/Wed 18:00)" value={formData.schedule || ''} onChange={(e) => setFormData({...formData, schedule: e.target.value})} />
              <select className="w-full px-4 py-2 border rounded-lg" value={formData.status || ''} onChange={(e) => setFormData({...formData, status: e.target.value})}>
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Filling">Filling</option>
              </select>
            </>
          );
        case 'consultation':
          return (
            <>
              <input className="w-full px-4 py-2 border rounded-lg" placeholder="Prospect Name" value={formData.prospectName || ''} onChange={(e) => setFormData({...formData, prospectName: e.target.value})} />
              <input className="w-full px-4 py-2 border rounded-lg" placeholder="Phone" value={formData.phone || ''} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Email" value={formData.email || ''} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              <input type="date" className="w-full px-4 py-2 border rounded-lg" placeholder="Consultation Date" value={formData.consultationDate || ''} onChange={(e) => setFormData({...formData, consultationDate: e.target.value})} />
              <input type="time" className="w-full px-4 py-2 border rounded-lg" placeholder="Time" value={formData.consultationTime || ''} onChange={(e) => setFormData({...formData, consultationTime: e.target.value})} />
              <input className="w-full px-4 py-2 border rounded-lg" placeholder="Advisor" value={formData.advisor || ''} onChange={(e) => setFormData({...formData, advisor: e.target.value})} />
              <input className="w-full px-4 py-2 border rounded-lg" placeholder="Interest (e.g., A1 Course)" value={formData.interest || ''} onChange={(e) => setFormData({...formData, interest: e.target.value})} />
              <select className="w-full px-4 py-2 border rounded-lg" value={formData.source || ''} onChange={(e) => setFormData({...formData, source: e.target.value})}>
                <option value="">Select Source</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Website">Website</option>
                <option value="Google Ads">Google Ads</option>
                <option value="Referral">Referral</option>
              </select>
              <select className="w-full px-4 py-2 border rounded-lg" value={formData.status || ''} onChange={(e) => setFormData({...formData, status: e.target.value})}>
                <option value="">Select Status</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
              <textarea className="w-full px-4 py-2 border rounded-lg" placeholder="Notes" value={formData.notes || ''} onChange={(e) => setFormData({...formData, notes: e.target.value})} />
              {formData.status === 'Completed' && (
                <select className="w-full px-4 py-2 border rounded-lg" value={formData.followUp || ''} onChange={(e) => setFormData({...formData, followUp: e.target.value})}>
                  <option value="">Follow-up Status</option>
                  <option value="Enrolled">Enrolled</option>
                  <option value="Thinking">Thinking</option>
                  <option value="Not Interested">Not Interested</option>
                </select>
              )}
            </>
          );
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-t-2xl">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                {modalAction === 'add' ? 'Add New' : 'Edit'} {modalType.charAt(0).toUpperCase() + modalType.slice(1)}
              </h2>
              <button onClick={() => setShowModal(false)} className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {renderFormFields()}
            <div className="flex gap-3 pt-4">
              <button onClick={handleSave} className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                <Save className="w-5 h-5" />
                Save
              </button>
              <button onClick={() => setShowModal(false)} className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-6">
      <Modal />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-2xl p-8 mb-6 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold flex items-center gap-3">
              <GraduationCap className="w-10 h-10" />
              Tunisian Careers Academy
            </h1>
            <p className="text-blue-100 mt-2 text-lg">German Language Training & Management Dashboard</p>
            <p className="text-blue-200 text-sm mt-1">🇩🇪 Excellence in German Language Education Since 2020</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => setActiveSection(activeSection === 'overview' ? 'analytics' : 'overview')}
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:bg-blue-50 transition"
            >
              {activeSection === 'overview' ? <BarChart3 className="w-5 h-5" /> : <Table className="w-5 h-5" />}
              {activeSection === 'overview' ? 'Analytics View' : 'Management View'}
            </button>
            <select 
              className="px-4 py-2 bg-white text-slate-800 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg"
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value)}
            >
              <option value="all">All Weeks</option>
              <option value="Week 1">Week 1</option>
              <option value="Week 2">Week 2</option>
              <option value="Week 3">Week 3</option>
            </select>
          </div>
        </div>
      </div>

      {/* Academy Overview - Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-5 shadow-lg transform hover:scale-105 transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Students</p>
              <p className="text-4xl font-bold mt-1">{studentsMetrics.total}</p>
            </div>
            <Users className="w-12 h-12 opacity-80" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-5 shadow-lg transform hover:scale-105 transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Active Professors</p>
              <p className="text-4xl font-bold mt-1">{professorsMetrics.active}</p>
            </div>
            <UserCheck className="w-12 h-12 opacity-80" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-xl p-5 shadow-lg transform hover:scale-105 transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-teal-100 text-sm">Active Groups</p>
              <p className="text-4xl font-bold mt-1">{groupsMetrics.active}</p>
            </div>
            <BookOpen className="w-12 h-12 opacity-80" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-5 shadow-lg transform hover:scale-105 transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Consultations</p>
              <p className="text-4xl font-bold mt-1">{consultationsMetrics.total}</p>
            </div>
            <Calendar className="w-12 h-12 opacity-80" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-5 shadow-lg transform hover:scale-105 transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Monthly Revenue</p>
              <p className="text-4xl font-bold mt-1">{financialMetrics.income.toLocaleString()} DT</p>
            </div>
            <DollarSign className="w-12 h-12 opacity-80" />
          </div>
        </div>
      </div>

      {activeSection === 'analytics' ? (
        <>
          {/* Analytics View - Charts and Visualizations */}
          
          {/* Course Planning Analytics */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              📚 Course Planning Analytics
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-blue-500">
                <p className="text-slate-600 text-sm font-medium">Total Activities</p>
                <p className="text-3xl font-bold text-slate-800 mt-1">{weeklyMetrics.total}</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-green-500">
                <p className="text-slate-600 text-sm font-medium">Completed</p>
                <p className="text-3xl font-bold text-green-600 mt-1">{weeklyMetrics.completed}</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-orange-500">
                <p className="text-slate-600 text-sm font-medium">Pending</p>
                <p className="text-3xl font-bold text-orange-600 mt-1">{weeklyMetrics.pending}</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-purple-500">
                <p className="text-slate-600 text-sm font-medium">Completion Rate</p>
                <p className="text-3xl font-bold text-purple-600 mt-1">{weeklyMetrics.completionRate}%</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-indigo-500">
                <p className="text-slate-600 text-sm font-medium">Avg Duration</p>
                <p className="text-3xl font-bold text-indigo-600 mt-1">{weeklyMetrics.avgDuration}d</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">📊 Weekly Course Activities</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={tasksByWeek}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="completed" fill="#34A853" name="Completed" />
                    <Bar dataKey="pending" fill="#FBBC04" name="Pending" />
                    <Bar dataKey="inProgress" fill="#4285F4" name="In Progress" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">📈 Activity Status Overview</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie data={statusDistribution} cx="50%" cy="50%" labelLine={false} label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`} outerRadius={90} fill="#8884d8" dataKey="value">
                      {statusDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Professor Analytics */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              👨‍🏫 Professor Performance Analytics
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">📊 Professor Workload Distribution</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={professorWorkload}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="students" fill="#9C27B0" name="Students" />
                    <Bar dataKey="hours" fill="#00BCD4" name="Hours/Week" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">📈 Active Groups per Professor</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={professorWorkload} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="groups" fill="#4285F4" name="Active Groups" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Groups & Students Analytics */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              📚 Groups & Students Analytics
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">📊 Group Capacity Utilization</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={groupCapacity}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="enrolled" fill="#34A853" name="Enrolled" stackId="a" />
                    <Bar dataKey="available" fill="#E8F5E9" name="Available" stackId="a" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">📈 Students by German Level</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={studentsByLevel}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#4285F4" name="Students">
                      {studentsByLevel.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Financial Analytics */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              💰 Financial Analytics
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm font-medium">Total Income</p>
                    <p className="text-4xl font-bold mt-2">{financialMetrics.income.toLocaleString()} DT</p>
                  </div>
                  <DollarSign className="w-12 h-12 opacity-80" />
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-red-100 text-sm font-medium">Total Expenses</p>
                    <p className="text-4xl font-bold mt-2">{financialMetrics.expenses.toLocaleString()} DT</p>
                  </div>
                  <DollarSign className="w-12 h-12 opacity-80" />
                </div>
              </div>
              
              <div className={`bg-gradient-to-br ${financialMetrics.balance >= 0 ? 'from-blue-500 to-blue-600' : 'from-orange-500 to-orange-600'} text-white rounded-xl p-6 shadow-lg`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white opacity-90 text-sm font-medium">Net Balance</p>
                    <p className="text-4xl font-bold mt-2">{financialMetrics.balance.toLocaleString()} DT</p>
                  </div>
                  <TrendingUp className="w-12 h-12 opacity-80" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">📈 Monthly Income vs Expenses</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={monthlyFinancial}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="income" stroke="#34A853" strokeWidth={3} name="Income (DT)" />
                    <Line type="monotone" dataKey="expenses" stroke="#EA4335" strokeWidth={3} name="Expenses (DT)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">💵 Income Sources Breakdown</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie data={incomeChart} cx="50%" cy="50%" labelLine={false} label={({name, value}) => `${name}: ${value} DT`} outerRadius={90} fill="#8884d8" dataKey="value">
                      {incomeChart.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">💸 Expense Categories</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={expensesChart}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-15} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#EA4335" name="Amount (DT)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">🧾 Expense Distribution</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie data={expensesChart} cx="50%" cy="50%" labelLine={false} label={({name, value}) => `${name}: ${value} DT`} outerRadius={90} fill="#8884d8" dataKey="value">
                      {expensesChart.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Student Payment Analytics */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              💥 Student Payment Analytics
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm">Total Students</p>
                    <p className="text-4xl font-bold mt-1">{studentsMetrics.total}</p>
                  </div>
                  <Users className="w-10 h-10 opacity-80" />
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm">Paid</p>
                    <p className="text-4xl font-bold mt-1">{studentsMetrics.paid}</p>
                  </div>
                  <CheckCircle className="w-10 h-10 opacity-80" />
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-red-100 text-sm">Unpaid</p>
                    <p className="text-4xl font-bold mt-1">{studentsMetrics.unpaid}</p>
                  </div>
                  <AlertCircle className="w-10 h-10 opacity-80" />
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-xl p-5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-yellow-100 text-sm">Partial</p>
                    <p className="text-4xl font-bold mt-1">{studentsMetrics.partial}</p>
                  </div>
                  <Clock className="w-10 h-10 opacity-80" />
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-xl p-5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-teal-100 text-sm">Payment Rate</p>
                    <p className="text-4xl font-bold mt-1">{studentsMetrics.paymentRate}%</p>
                  </div>
                  <TrendingUp className="w-10 h-10 opacity-80" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">📊 Payment Status Distribution</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie data={paymentStatus} cx="50%" cy="50%" innerRadius={70} outerRadius={100} fill="#8884d8" paddingAngle={3} dataKey="value" label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                      <Cell fill="#34A853" />
                      <Cell fill="#EA4335" />
                      <Cell fill="#FBBC04" />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">📈 Students Enrolled by Level</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={studentsByLevel}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" name="Students">
                      {studentsByLevel.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Management View - CRUD Tables */}
          
          {/* Course Planning */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
                📚 Course Planning & Academic Activities
              </h2>
              <button onClick={() => openAddModal('task')} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg">
                <Plus className="w-5 h-5" />
                Add Task
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Task</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Professor</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Level</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Week</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Priority</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weeklyPlanData.map((task) => (
                      <tr key={task.id} className="border-b border-slate-200 hover:bg-blue-50 transition">
                        <td className="px-4 py-3 text-sm text-slate-700 font-medium">{task.taskName}</td>
                        <td className="px-4 py-3 text-sm text-slate-700">{task.assignedTo}</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                            {task.courseLevel}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-700">{task.week}</td>
                        <td className="px-4 py-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            task.status === 'Done' ? 'bg-green-100 text-green-700' : 
                            task.status === 'Pending' ? 'bg-orange-100 text-orange-700' : 
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {task.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            task.priority === 'High' ? 'bg-red-100 text-red-700' : 
                            task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 
                            'bg-green-100 text-green-700'
                          }`}>
                            {task.priority}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <button onClick={() => openEditModal('task', task)} className="text-blue-600 hover:bg-blue-100 p-2 rounded">
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleDelete('task', task.id)} className="text-red-600 hover:bg-red-100 p-2 rounded">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Consultations */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
                🎯 Consultation Management
              </h2>
              <button onClick={() => openAddModal('consultation')} className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg">
                <Plus className="w-5 h-5" />
                Add Consultation
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Prospect</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Contact</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Date & Time</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Advisor</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Interest</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {consultationsData.map((consultation) => (
                      <tr key={consultation.id} className="border-b border-slate-200 hover:bg-orange-50 transition">
                        <td className="px-4 py-3 text-sm text-slate-700 font-medium">{consultation.prospectName}</td>
                        <td className="px-4 py-3 text-xs text-slate-600">
                          <div>{consultation.phone}</div>
                          <div className="text-blue-600">{consultation.email}</div>
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-700">
                          <div>{consultation.consultationDate}</div>
                          <div className="text-xs text-slate-500">{consultation.consultationTime}</div>
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-700">{consultation.advisor}</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs font-medium">
                            {consultation.interest}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            consultation.status === 'Scheduled' ? 'bg-blue-100 text-blue-700' : 
                            consultation.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                            'bg-red-100 text-red-700'
                          }`}>
                            {consultation.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <button onClick={() => openEditModal('consultation', consultation)} className="text-blue-600 hover:bg-blue-100 p-2 rounded">
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleDelete('consultation', consultation.id)} className="text-red-600 hover:bg-red-100 p-2 rounded">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Professors */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
                👨‍🏫 Professors Management
              </h2>
              <button onClick={() => openAddModal('professor')} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg">
                <Plus className="w-5 h-5" />
                Add Professor
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Specialization</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Groups</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Students</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Hours/Week</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {professorsData.map((prof) => (
                      <tr key={prof.id} className="border-b border-slate-200 hover:bg-purple-50 transition">
                        <td className="px-4 py-3 text-sm text-slate-700 font-medium">{prof.name}</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs font-medium">
                            {prof.specialization}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-700 text-center">{prof.activeGroups}</td>
                        <td className="px-4 py-3 text-sm text-slate-700 text-center">{prof.totalStudents}</td>
                        <td className="px-4 py-3 text-sm text-slate-700 text-center">{prof.hoursPerWeek}h</td>
                        <td className="px-4 py-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            prof.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {prof.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <button onClick={() => openEditModal('professor', prof)} className="text-blue-600 hover:bg-blue-100 p-2 rounded">
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleDelete('professor', prof.id)} className="text-red-600 hover:bg-red-100 p-2 rounded">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Groups */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
                📚 Groups Management
              </h2>
              <button onClick={() => openAddModal('group')} className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg">
                <Plus className="w-5 h-5" />
                Add Group
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Group</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Level</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Professor</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Schedule</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Students</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Capacity</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupsData.map((group) => (
                      <tr key={group.id} className="border-b border-slate-200 hover:bg-teal-50 transition">
                        <td className="px-4 py-3 text-sm text-slate-700 font-medium">{group.groupName}</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                            {group.level}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-700">{group.professor}</td>
                        <td className="px-4 py-3 text-sm text-slate-700">{group.schedule}</td>
                        <td className="px-4 py-3 text-sm text-slate-700 text-center">{group.students}</td>
                        <td className="px-4 py-3 text-sm text-slate-700 text-center">{group.capacity}</td>
                        <td className="px-4 py-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            group.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {group.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <button onClick={() => openEditModal('group', group)} className="text-blue-600 hover:bg-blue-100 p-2 rounded">
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleDelete('group', group.id)} className="text-red-600 hover:bg-red-100 p-2 rounded">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Financial */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
                💰 Financial Overview
              </h2>
              <button onClick={() => openAddModal('financial')} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg">
                <Plus className="w-5 h-5" />
                Add Transaction
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Date</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Category</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Description</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-slate-700">Amount (DT)</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financialData.map((trans) => (
                      <tr key={trans.id} className="border-b border-slate-200 hover:bg-slate-50 transition">
                        <td className="px-4 py-3 text-sm text-slate-700">{trans.date}</td>
                        <td className="px-4 py-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            trans.type === 'Income' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {trans.type}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-700">{trans.category}</td>
                        <td className="px-4 py-3 text-sm text-slate-700">{trans.description}</td>
                        <td className={`px-4 py-3 text-sm text-right font-bold ${
                          trans.type === 'Income' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {trans.type === 'Income' ? '+' : '-'}{trans.amount.toLocaleString()} DT
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <button onClick={() => openEditModal('financial', trans)} className="text-blue-600 hover:bg-blue-100 p-2 rounded">
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleDelete('financial', trans.id)} className="text-red-600 hover:bg-red-100 p-2 rounded">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Students */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
                💥 Student Payments
              </h2>
              <button onClick={() => openAddModal('student')} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg">
                <Plus className="w-5 h-5" />
                Add Student
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Level</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Group</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Payment Date</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-slate-700">Amount (DT)</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentsData.map((student) => (
                      <tr key={student.id} className="border-b border-slate-200 hover:bg-blue-50 transition">
                        <td className="px-4 py-3 text-sm text-slate-700 font-medium">{student.name}</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                            {student.level}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-700">{student.group}</td>
                        <td className="px-4 py-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            student.status === 'Paid' ? 'bg-green-100 text-green-700' : 
                            student.status === 'Unpaid' ? 'bg-red-100 text-red-700' : 
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {student.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-700">{student.date}</td>
                        <td className="px-4 py-3 text-sm text-right font-bold text-slate-800">{student.amount.toLocaleString()} DT</td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <button onClick={() => openEditModal('student', student)} className="text-blue-600 hover:bg-blue-100 p-2 rounded">
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleDelete('student', student.id)} className="text-red-600 hover:bg-red-100 p-2 rounded">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Footer */}
      <div className="bg-white rounded-xl shadow-lg p-6 text-center">
        <div className="flex items-center justify-center gap-3 text-slate-600">
          <Globe className="w-5 h-5" />
          <p className="text-sm">
            <strong>Tunisian Careers Academy</strong> - Excellence in German Language Education
          </p>
        </div>
        <p className="text-slate-500 text-xs mt-2">
          Dashboard last updated: {new Date().toLocaleString('en-GB')} | {activeSection === 'analytics' ? 'Analytics View' : 'Management View'}
        </p>
      </div>
    </div>
  );
};

export default TCADashboard;