import React, { useContext } from 'react'
import { ThemeContext } from 'grommet'
import { Blank } from 'grommet-icons'
import AccessTokenR from '../svgs/access-tokens.svg'
import AddGroupR from '../svgs/add-group.svg'
import AddUserR from '../svgs/add-user.svg'
import AuditsR from '../svgs/audits.svg'
import BuildsR from '../svgs/builds.svg'
import ComponentsR from '../svgs/components.svg'
import ConfigurationR from '../svgs/configuration.svg'
import CreateRoleR from '../svgs/create-role.svg'
import CredentialsR from '../svgs/credentials.svg'
import DashboardR from '../svgs/dashboard.svg'
import EditFieldR from '../svgs/edit-field.svg'
import ExploreR from '../svgs/explore.svg'
import GraphViewR from '../svgs/graph-view.svg'
import GroupR from '../svgs/group.svg'
import IncidentR from '../svgs/incident.svg'
import InstallationsR from '../svgs/installations.svg'
import InstalledR from '../svgs/installed.svg'
import InvoicesR from '../svgs/invoices.svg'
import ListViewR from '../svgs/list-view.svg'
import LogoutR from '../svgs/logout.svg'
import LogsR from '../svgs/logs.svg'
import NodesR from '../svgs/nodes.svg'
import OauthR from '../svgs/oauth.svg'
import PasswordR from '../svgs/password.svg'
import PaymentMethodsR from '../svgs/payment-methods.svg'
import PublicKeysR from '../svgs/public-keys.svg'
import PublicR from '../svgs/public.svg'
import PublisherR from '../svgs/publisher.svg'
import ResponsesR from '../svgs/responses.svg'
import RolesR from '../svgs/roles.svg'
import ServiceAccountsR from '../svgs/service-accounts.svg'
import TableViewR from '../svgs/table-view.svg'
import UpdatesR from '../svgs/updates.svg'
import UserR from '../svgs/user.svg'
import WebhooksR from '../svgs/webhooks.svg'

const parseMetricToNum = (string) => parseFloat(string.match(/\d+(\.\d+)?/), 10);

function IconWrapper({size, child, ...props}) {
  const theme = useContext(ThemeContext)
  const dimension = `${parseMetricToNum(theme.icon.size[size] || size)}px`

  return React.createElement(child, {...props, width: dimension, height: dimension})
}

export const Send = (props) => (
  <Blank {...props}>
    <svg version="1.1" id="Layer_1" x="0px" y="0px" width="24px" height="24px" viewBox="12 12 24 24" enableBackground="new 12 12 24 24">
      <path fill="#32785C" d="M14.51,33l20.99-9l-20.99-9l-0.01,7l15,2l-15,2L14.51,33z"/>
      <path fill="none" d="M0,0h48v48H0V0z"/>
    </svg>
  </Blank>
)

export const AccessTokens = (props) => (
  <Blank {...props}>
    <AccessTokenR />
  </Blank>
)
export const AddGroup = (props) => (
  <Blank {...props}>
    <AddGroupR />
  </Blank>
)
export const AddUser = (props) => (
  <Blank {...props}>
    <AddUserR />
  </Blank>
)
export const Audits = (props) => (
  <Blank {...props}>
    <AuditsR />
  </Blank>
)
export const Builds = (props) => (
  <Blank {...props}>
    <BuildsR />
  </Blank>
)
export const Components = (props) => (
  <Blank {...props}>
    <ComponentsR />
  </Blank>
)
export const Configuration = (props) => (
  <Blank {...props}>
    <ConfigurationR />
  </Blank>
)
export const CreateRole = (props) => (
  <Blank {...props}>
    <CreateRoleR />
  </Blank>
)
export const Credentials = (props) => (
  <Blank {...props}>
    <CredentialsR />
  </Blank>
)
export const Dashboard = (props) => (
  <Blank {...props}>
    <DashboardR />
  </Blank>
)
export const EditField = (props) => (
  <Blank {...props}>
    <EditFieldR />
  </Blank>
)
export const Explore = (props) => (
  <Blank {...props}>
    <ExploreR />
  </Blank>
)
export const GraphView = (props) => (
  <Blank {...props}>
    <GraphViewR />
  </Blank>
)
export const Group = (props) => (
  <Blank {...props}>
    <GroupR />
  </Blank>
)
export const Incidents = (props) => (
  <Blank {...props}>
    <IncidentR />
  </Blank>
)
export const Installations = (props) => (
  <Blank {...props}>
    <InstallationsR />
  </Blank>
)
export const Installed = (props) => (
  <Blank {...props}>
    <InstalledR />
  </Blank>
)
export const Invoices = (props) => (
  <Blank {...props}>
    <InvoicesR />
  </Blank>
)
export const ListView = (props) => (
  <Blank {...props}>
    <ListViewR />
  </Blank>
)
export const Logout = (props) => (
  <Blank {...props}>
    <LogoutR />
  </Blank>
)
export const Logs = (props) => (
  <Blank {...props}>
    <LogsR />
  </Blank>
)
export const Nodes = (props) => (
  <Blank {...props}>
    <NodesR />
  </Blank>
)
export const Oauth = (props) => (
  <Blank {...props}>
    <OauthR />
  </Blank>
)
export const Password = (props) => (
  <Blank {...props}>
    <PasswordR />
  </Blank>
)
export const PaymentMethods = (props) => (
  <Blank {...props}>
    <PaymentMethodsR />
  </Blank>
)
export const PublicKeys = (props) => (
  <Blank {...props}>
    <PublicKeysR />
  </Blank>
)
export const Public = (props) => (
  <Blank {...props}>
    <PublicR />
  </Blank>
)
export const Publisher = (props) => (
  <Blank {...props}>
    <PublisherR />
  </Blank>
)
export const Responses = (props) => (
  <Blank {...props}>
    <ResponsesR />
  </Blank>
)
export const Roles = (props) => (
  <Blank {...props}>
    <RolesR />
  </Blank>
)
export const ServiceAccounts = (props) => (
  <Blank {...props}>
    <ServiceAccountsR />
  </Blank>
)
export const TableView = (props) => (
  <Blank {...props}>
    <TableViewR />
  </Blank>
)
export const Update = (props) => (
  <Blank {...props}>
    <UpdatesR />
  </Blank>
)
export const User = (props) => (
  <Blank {...props}>
    <UserR />
  </Blank>
)
export const Webhooks = (props) => (
  <Blank {...props}>
    <WebhooksR />
  </Blank>
)
