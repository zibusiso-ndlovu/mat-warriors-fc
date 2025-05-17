// src/components/services/CloudServices.jsx
import { motion } from 'framer-motion';
import { CloudArrowUpIcon, ServerIcon, ShieldCheckIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const services = [
  {
    id: 1,
    title: "Cloud Storage",
    description: "Secure and scalable storage solutions for your business data",
    icon: CloudArrowUpIcon,
    metrics: [
      { label: "Storage", value: "Unlimited" },
      { label: "Backup", value: "Daily" }
    ],
    status: "Active",
    color: "blue"
  },
  {
    id: 2,
    title: "Server Management",
    description: "24/7 server monitoring and maintenance",
    icon: ServerIcon,
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Response", value: "24/7" }
    ],
    status: "Active",
    color: "green"
  },
  {
    id: 3,
    title: "Security Services",
    description: "Enterprise-grade security and encryption",
    icon: ShieldCheckIcon,
    metrics: [
      { label: "Protection", value: "Advanced" },
      { label: "Compliance", value: "GDPR" }
    ],
    status: "Active",
    color: "purple"
  },
  {
    id: 4,
    title: "Computing Power",
    description: "Scalable computing resources on demand",
    icon: CpuChipIcon,
    metrics: [
      { label: "Scaling", value: "Auto" },
      { label: "Performance", value: "High" }
    ],
    status: "Active",
    color: "orange"
  }
];

const CloudServiceCard = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:border-blue-500 transition-all duration-300"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg bg-${service.color}-100`}>
            <service.icon className={`w-6 h-6 text-${service.color}-600`} />
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800`}>
            {service.status}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {service.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {service.metrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">{metric.label}</p>
              <p className="text-lg font-semibold text-gray-900">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Manage Service
        </button>
      </div>
    </motion.div>
  );
};

const CloudServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <CloudArrowUpIcon className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Cloud Services</h2>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 max-w-2xl">
              Manage and monitor your cloud services from a single dashboard
            </p>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                Refresh
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                New Service
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <CloudServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Summary Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white p-6 rounded-lg shadow-lg border border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Total Services</p>
              <p className="text-2xl font-bold text-blue-600">4</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">Active Services</p>
              <p className="text-2xl font-bold text-green-600">4</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-gray-600">Resource Usage</p>
              <p className="text-2xl font-bold text-yellow-600">75%</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-600">Uptime</p>
              <p className="text-2xl font-bold text-purple-600">99.9%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudServices;