const Banner = require('../model/bannerModel');
const Company = require('../model/companyModel');
const FAQ = require('../model/FAQsModel');
const AppAdminPanel = require('../model/appAdminPanelModel');
const AppSolution = require('../model/appSolutionsModel');
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
const { getAll } = require('../controller/adminPanel/factoryHandler');

exports.pageApi = async (page) => {
  if (page.sections.banner.order) {
    page.sections.banner.dataArray = await getAll(
      Banner,
      page.sections.banner.queryParams,
    );
    console.log(page);
  }
  if (page.sections.company.order) {
    page.sections.company.dataArray = await getAll(
      Company,
      page.sections.company.queryParams,
    );
  }
  if (page.sections.services.order) {
    page.sections.services.dataArray = await getAll(
      Service,
      page.sections.services.queryParams,
    );
  }
  if (page.sections.reviews.order) {
    page.sections.reviews.dataArray = await getAll(
      Review,
      page.sections.reviews.queryParams,
    );
  }
  if (page.sections.homeSlider.order) {
    page.sections.homeSlider.dataArray = await getAll(
      HomeSlider,
      page.sections.homeSlider.queryParams,
    );
  }
  if (page.sections.awards.order) {
    page.sections.awards.dataArray = await getAll(
      Award,
      page.sections.awards.queryParams,
    );
  }
  if (page.sections.opportunites.order) {
    page.sections.opportunites.dataArray = await getAll(
      Opportunite,
      page.sections.opportunites.queryParams,
    );
  }
  if (page.sections.trainingCertification.order) {
    page.sections.trainingCertification.dataArray = await getAll(
      TrainingCertification,
      page.sections.trainingCertification.queryParams,
    );
  }
  if (page.sections.workFlow.order) {
    page.sections.workFlow.dataArray = await getAll(
      WorkFlow,
      page.sections.workFlow.queryParams,
    );
  }
  if (page.sections.joinTeam.order) {
    page.sections.joinTeam.dataArray = await getAll(
      JoinTeam,
      page.sections.joinTeam.queryParams,
    );
  }
  if (page.sections.jobBenifits.order) {
    page.sections.jobBenifits.dataArray = await getAll(
      JobBenifit,
      page.sections.jobBenifits.queryParams,
    );
  }
  if (page.sections.FAQs.order) {
    page.sections.FAQs.dataArray = await getAll(
      FAQ,
      page.sections.FAQs.queryParams,
    );
  }
  if (page.sections.appAdminPanel.order) {
    page.sections.appAdminPanel.dataArray = await getAll(
      AppAdminPanel,
      page.sections.appAdminPanel.queryParams,
    );
  }
  if (page.sections.appSolutions.order) {
    page.sections.appSolutions.dataArray = await getAll(
      AppSolution,
      page.sections.appSolutions.queryParams,
    );
  }
  if (page.sections.blogs.order) {
    page.sections.blogs.dataArray = await getAll(
      Blog,
      page.sections.blogs.queryParams,
    );
  }
  if (page.sections.benefits.order) {
    page.sections.benefits.dataArray = await getAll(
      Benifit,
      page.sections.benefits.queryParams,
    );
  }

  if (page.sections.hiringOptions.order) {
    page.sections.hiringOptions.dataArray = await getAll(
      HiringOption,
      page.sections.hiringOptions.queryParams,
    );
  }
  if (page.sections.factsAboutUs.order) {
    page.sections.factsAboutUs.dataArray = await getAll(
      FactsAboutUs,
      page.sections.factsAboutUs.queryParams,
    );
  }
  if (page.sections.ourWork.order) {
    page.sections.ourWork.dataArray = await getAll(
      OurWork,
      page.sections.ourWork.queryParams,
    );
  }
  if (page.sections.ourObjectives.order) {
    page.sections.ourObjectives.dataArray = await getAll(
      OurObjective,
      page.sections.ourObjectives.queryParams,
    );
  }
  if (page.sections.howitWorks.order) {
    page.sections.howitWorks.dataArray = await getAll(
      HowitWork,
      page.sections.howitWorks.queryParams,
    );
  }
  if (page.sections.caseStudies.order) {
    page.sections.caseStudies.dataArray = await getAll(
      CaseStudie,
      page.sections.howitWorks.queryParams,
    );
  }
  return page;
};

exports.servicesEnum = async (v) => {
  return !!(await Service.findOne({ type: 'Parent', title: v }));
};
