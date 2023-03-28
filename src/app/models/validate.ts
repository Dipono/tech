export class Validate {
    constructor(
        public staffName: string,
        public adminName: string,
        public office: string,
        public category: string,
        public artisan: string,
        public message: string,
        public urgency: string,
        public reqDate: Date,
        public etc: Date
        ) {}
        
    id!: string;
    sName!: string;
    emailAddress!: string;
    phoneNumber!: string;
}
