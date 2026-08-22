'use client'

import React, { useState } from 'react'
import type { WorkspaceRow, ArtifactRow } from '@/types/database'
import type { WorkspaceMemberWithUser } from '@/lib/db/workspaces'
import { WorkspaceHeader } from '@/components/workspaces/WorkspaceHeader'
import { ArtifactList } from '@/components/artifacts/ArtifactList'

export interface WorkspaceDetailClientProps {
  workspace: WorkspaceRow
  members: WorkspaceMemberWithUser[]
  artifacts: ArtifactRow[]
}

export function WorkspaceDetailClient({
  workspace,
  members,
  artifacts,
}: WorkspaceDetailClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="space-y-8">
      <WorkspaceHeader
        workspace={workspace}
        members={members}
        artifactCount={artifacts.length}
        onNewArtifact={() => setIsModalOpen(true)}
      />
      <ArtifactList
        workspaceId={workspace.id}
        artifacts={artifacts}
        isModalOpen={isModalOpen}
        onOpenModal={() => setIsModalOpen(true)}
        onCloseModal={() => setIsModalOpen(false)}
      />
    </div>
  )
}
