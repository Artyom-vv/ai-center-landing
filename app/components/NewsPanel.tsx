import React, {FC} from 'react';
import LandingPanel, {LandingPanelProps} from "@/app/components/LandingPanel";
import cn from "classnames";
import Link from "@/app/components/ui/Link";
import LinkIcon from '../../public/svg/external-link-line.svg'

export interface NewsPanelProps extends LandingPanelProps {
    link: string;
    linkLabel: string;
}

const NewsPanel: FC<NewsPanelProps> = ({title, description, link, linkLabel, ...props}) => {
    return (
        <LandingPanel
            {...props}
            className={cn(
                props.className,
                "h-[464px]"
            )}
            tiltClass="!bg-neutral-bg-on-subtle-default"
            glareColor="var(--color-neutral-bg-on-subtle-hover)"
        >
            <div className="mt-auto space-y-small">
                <h5>{title}</h5>
                <p className="text-body-big text-neutral-text-secondary">{description}</p>
            </div>
            <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                rightIcon={<LinkIcon/>}
            >
                {linkLabel}
            </Link>
        </LandingPanel>
    );
};

export default NewsPanel;