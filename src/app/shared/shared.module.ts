import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeatherModule } from 'angular-feather';

import {
  Phone,
  Star,
  Send,
  Headphones,
  HardDrive,
  Calendar,
  BarChart,
  DownloadCloud,
  Mail,
  Clipboard,
  Play,
  Box,
  Settings,
  Award,
  Code,
  Camera,
  Sun,
  Wind,
  Clock,
  Anchor,
  Users,
  Eye,
  Activity,
  UploadCloud,
  PenTool,
  Zap,
  Map,
  Cloud,
  DollarSign,
  ThumbsUp,
  PieChart,
  User,
  LifeBuoy,
  Image,
  Sliders,
  Target,
  File,
  Smartphone,
  MessageCircle,
  CreditCard,
  Book,
  Lock,
  Airplay,
  Monitor,
  Download,
  Hexagon,
  Layers,
  ArrowLeft,
  ArrowRight,
  Repeat,
  Bell,
  Menu
} from 'angular-feather/icons';

import { LoaderComponent } from './loader/loader.component';
import { PageHeaderWaveComponent } from './page-header-wave/page-header-wave.component';
import { FeatherComponent } from './feather/feather.component';
import { BadgeComponent } from './badge/badge.component';
import { CopyComponent } from './components/copy/copy.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MenuClientComponent } from './components/menu-client/menu-client.component';
import { RouterModule } from '@angular/router';
import { SettingMenuComponent } from './components/setting-menu/setting-menu.component';
import { SettingRoleComponent } from './setting-role/setting-role.component';

// Select some icons (use an object, not an array)
const icons = {
  Phone,
  Star,
  Send,
  Headphones,
  HardDrive,
  Calendar,
  BarChart,
  DownloadCloud,
  Mail,
  Clipboard,
  Play,
  Box,
  Settings,
  Award,
  Code,
  Camera,
  Sun,
  Wind,
  Clock,
  Anchor,
  Users,
  Eye,
  Activity,
  UploadCloud,
  PenTool,
  Zap,
  Map,
  Cloud,
  DollarSign,
  ThumbsUp,
  PieChart,
  User,
  LifeBuoy,
  Image,
  Sliders,
  Target,
  File,
  Smartphone,
  MessageCircle,
  CreditCard,
  Book,
  Lock,
  Airplay,
  Monitor,
  Download,
  Hexagon,
  Layers,
  ArrowLeft,
  ArrowRight,
  Repeat,
  Bell
};

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FeatherModule.pick(icons),
    FontAwesomeModule,
    ClipboardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  declarations: [
    LoaderComponent,
    PageHeaderWaveComponent,
    FeatherComponent,
    BadgeComponent,
    CopyComponent,
    MenuClientComponent,
    SettingMenuComponent,
    SettingRoleComponent
  ],
  exports: [
    LoaderComponent,
    PageHeaderWaveComponent,
    FeatherComponent,
    BadgeComponent,
    SettingMenuComponent,
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    CopyComponent,
    MenuClientComponent,
    SettingRoleComponent
  ]
})
export class SharedModule {}
