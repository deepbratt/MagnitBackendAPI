const Banner = require('../model/bannerModel');
const Company = require('../model/companyModel');
const FAQ = require('../model/FAQsModel');
const AppAdminPanel = require('../model/appAdminPanelModel');
const AppSolution = require('../model/appSolutionsModel');
const OurSolution = require('../model/ourSolutionsModel');
const Award = require('../model/awardsModel');
const Benifit = require('../model/benifitsModel');
const Blog = require('../model/blogsModel');
const CaseStudie = require('../model/caseStudiesModel');
const FactsAboutUs = require('../model/factsAboutUsModel');
const HiringOption = require('../model/hiringOptionsModel');
const HowitWork = require('../model/howItWorksModel');
const JobBenifit = require('../model/jobBenifitsModel');
const JoinTeam = require('../model/joinTeamModel');
const Service = require('../model/servicesModel');
const HomeSlider = require('../model/sliderModel');
const Opportunite = require('../model/opportunitiesModel');
const Review = require('../model/reviewModel');
const TrainingCertification = require('../model/trainingCertificationModel');
const WorkFlow = require('../model/workflowModel');
const OurWork = require('../model/ourWorkModel');
const OurObjective = require('../model/ourObjectiveModel');
const {
  getAllForPages,
} = require('../controller/handlerFactory/factoryHandler');

exports.pageApi = async (page) => {
  if (page.sections.banner.order) {
    page.sections.banner.dataArray = await getAllForPages(
      Banner,
      page.sections.banner.queryParams,
    );
    console.log(page);
  }
  if (page.sections.company.order) {
    page.sections.company.dataArray = await getAllForPages(
      Company,
      page.sections.company.queryParams,
    );
  }
  if (page.sections.services.order) {
    page.sections.services.dataArray = await getAllForPages(
      Service,
      page.sections.services.queryParams,
    );
  }
  if (page.sections.reviews.order) {
    page.sections.reviews.dataArray = await getAllForPages(
      Review,
      page.sections.reviews.queryParams,
    );
  }
  if (page.sections.homeSlider.order) {
    page.sections.homeSlider.dataArray = await getAllForPages(
      HomeSlider,
      page.sections.homeSlider.queryParams,
    );
  }
  if (page.sections.awards.order) {
    page.sections.awards.dataArray = await getAllForPages(
      Award,
      page.sections.awards.queryParams,
    );
  }
  if (page.sections.opportunites.order) {
    page.sections.opportunites.dataArray = await getAllForPages(
      Opportunite,
      page.sections.opportunites.queryParams,
    );
  }
  if (page.sections.trainingCertification.order) {
    page.sections.trainingCertification.dataArray = await getAllForPages(
      TrainingCertification,
      page.sections.trainingCertification.queryParams,
    );
  }
  if (page.sections.workFlow.order) {
    page.sections.workFlow.dataArray = await getAllForPages(
      WorkFlow,
      page.sections.workFlow.queryParams,
    );
  }
  if (page.sections.joinTeam.order) {
    page.sections.joinTeam.dataArray = await getAllForPages(
      JoinTeam,
      page.sections.joinTeam.queryParams,
    );
  }
  if (page.sections.jobBenifits.order) {
    page.sections.jobBenifits.dataArray = await getAllForPages(
      JobBenifit,
      page.sections.jobBenifits.queryParams,
    );
  }
  if (page.sections.FAQs.order) {
    page.sections.FAQs.dataArray = await getAllForPages(
      FAQ,
      page.sections.FAQs.queryParams,
    );
  }
  if (page.sections.appAdminPanel.order) {
    page.sections.appAdminPanel.dataArray = await getAllForPages(
      AppAdminPanel,
      page.sections.appAdminPanel.queryParams,
    );
  }
  if (page.sections.appSolutions.order) {
    page.sections.appSolutions.dataArray = await getAllForPages(
      AppSolution,
      page.sections.appSolutions.queryParams,
    );
  }
  if (page.sections.blogs.order) {
    page.sections.blogs.dataArray = await getAllForPages(
      Blog,
      page.sections.blogs.queryParams,
    );
  }
  if (page.sections.benefits.order) {
    page.sections.benefits.dataArray = await getAllForPages(
      Benifit,
      page.sections.benefits.queryParams,
    );
  }

  if (page.sections.hiringOptions.order) {
    page.sections.hiringOptions.dataArray = await getAllForPages(
      HiringOption,
      page.sections.hiringOptions.queryParams,
    );
  }
  if (page.sections.factsAboutUs.order) {
    page.sections.factsAboutUs.dataArray = await getAllForPages(
      FactsAboutUs,
      page.sections.factsAboutUs.queryParams,
    );
  }
  if (page.sections.ourWork.order) {
    page.sections.ourWork.dataArray = await getAllForPages(
      OurWork,
      page.sections.ourWork.queryParams,
    );
  }
  if (page.sections.ourObjectives.order) {
    page.sections.ourObjectives.dataArray = await getAllForPages(
      OurObjective,
      page.sections.ourObjectives.queryParams,
    );
  }
  if (page.sections.howitWorks.order) {
    page.sections.howitWorks.dataArray = await getAllForPages(
      HowitWork,
      page.sections.howitWorks.queryParams,
    );
  }
  if (page.sections.caseStudies.order) {
    page.sections.caseStudies.dataArray = await getAllForPages(
      CaseStudie,
      page.sections.caseStudies.queryParams,
    );
  }
  if (page.sections.ourSolutions.order) {
    page.sections.ourSolutions.dataArray = await getAllForPages(
      OurSolution,
      page.sections.ourSolutions.queryParams,
    );
  }
  return page;
};

exports.servicesEnum = async (v) => {
  return !!(await Service.findOne({ type: 'Parent', title: v }));
};

exports.servicesAll = async (v) => {
  return !!(await Service.findOne({ title: v }));
};
