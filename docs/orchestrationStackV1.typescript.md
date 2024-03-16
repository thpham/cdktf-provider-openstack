# `orchestrationStackV1` Submodule <a name="`orchestrationStackV1` Submodule" id="@ithings/cdktf-provider-openstack.orchestrationStackV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrchestrationStackV1 <a name="OrchestrationStackV1" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1 openstack_orchestration_stack_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer"></a>

```typescript
import { orchestrationStackV1 } from '@ithings/cdktf-provider-openstack'

new orchestrationStackV1.OrchestrationStackV1(scope: Construct, id: string, config: OrchestrationStackV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config">OrchestrationStackV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config">OrchestrationStackV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.putOutputs">putOutputs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetCreationTime">resetCreationTime</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetDisableRollback">resetDisableRollback</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetEnvironmentOpts">resetEnvironmentOpts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetNotificationTopics">resetNotificationTopics</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetOutputs">resetOutputs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetStatusReason">resetStatusReason</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetTemplateDescription">resetTemplateDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetUpdatedTime">resetUpdatedTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOutputs` <a name="putOutputs" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.putOutputs"></a>

```typescript
public putOutputs(value: IResolvable | OrchestrationStackV1Outputs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.putOutputs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.putTimeouts"></a>

```typescript
public putTimeouts(value: OrchestrationStackV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts">OrchestrationStackV1Timeouts</a>

---

##### `resetCapabilities` <a name="resetCapabilities" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetCapabilities"></a>

```typescript
public resetCapabilities(): void
```

##### `resetCreationTime` <a name="resetCreationTime" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetCreationTime"></a>

```typescript
public resetCreationTime(): void
```

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableRollback` <a name="resetDisableRollback" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetDisableRollback"></a>

```typescript
public resetDisableRollback(): void
```

##### `resetEnvironmentOpts` <a name="resetEnvironmentOpts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetEnvironmentOpts"></a>

```typescript
public resetEnvironmentOpts(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotificationTopics` <a name="resetNotificationTopics" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetNotificationTopics"></a>

```typescript
public resetNotificationTopics(): void
```

##### `resetOutputs` <a name="resetOutputs" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetOutputs"></a>

```typescript
public resetOutputs(): void
```

##### `resetParameters` <a name="resetParameters" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStatus` <a name="resetStatus" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetStatusReason` <a name="resetStatusReason" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetStatusReason"></a>

```typescript
public resetStatusReason(): void
```

##### `resetTags` <a name="resetTags" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTemplateDescription` <a name="resetTemplateDescription" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetTemplateDescription"></a>

```typescript
public resetTemplateDescription(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpdatedTime` <a name="resetUpdatedTime" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.resetUpdatedTime"></a>

```typescript
public resetUpdatedTime(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OrchestrationStackV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.isConstruct"></a>

```typescript
import { orchestrationStackV1 } from '@ithings/cdktf-provider-openstack'

orchestrationStackV1.OrchestrationStackV1.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.isTerraformElement"></a>

```typescript
import { orchestrationStackV1 } from '@ithings/cdktf-provider-openstack'

orchestrationStackV1.OrchestrationStackV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.isTerraformResource"></a>

```typescript
import { orchestrationStackV1 } from '@ithings/cdktf-provider-openstack'

orchestrationStackV1.OrchestrationStackV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.generateConfigForImport"></a>

```typescript
import { orchestrationStackV1 } from '@ithings/cdktf-provider-openstack'

orchestrationStackV1.OrchestrationStackV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OrchestrationStackV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrchestrationStackV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrchestrationStackV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrchestrationStackV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.outputs">outputs</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList">OrchestrationStackV1OutputsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference">OrchestrationStackV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.capabilitiesInput">capabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.creationTimeInput">creationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.disableRollbackInput">disableRollbackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.environmentOptsInput">environmentOptsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.notificationTopicsInput">notificationTopicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.outputsInput">outputsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.statusReasonInput">statusReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.templateDescriptionInput">templateDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.templateOptsInput">templateOptsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts">OrchestrationStackV1Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.updatedTimeInput">updatedTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.capabilities">capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.disableRollback">disableRollback</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.environmentOpts">environmentOpts</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.notificationTopics">notificationTopics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.templateDescription">templateDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.templateOpts">templateOpts</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.updatedTime">updatedTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.outputs"></a>

```typescript
public readonly outputs: OrchestrationStackV1OutputsList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList">OrchestrationStackV1OutputsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.timeouts"></a>

```typescript
public readonly timeouts: OrchestrationStackV1TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference">OrchestrationStackV1TimeoutsOutputReference</a>

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.capabilitiesInput"></a>

```typescript
public readonly capabilitiesInput: string[];
```

- *Type:* string[]

---

##### `creationTimeInput`<sup>Optional</sup> <a name="creationTimeInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.creationTimeInput"></a>

```typescript
public readonly creationTimeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableRollbackInput`<sup>Optional</sup> <a name="disableRollbackInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.disableRollbackInput"></a>

```typescript
public readonly disableRollbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentOptsInput`<sup>Optional</sup> <a name="environmentOptsInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.environmentOptsInput"></a>

```typescript
public readonly environmentOptsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationTopicsInput`<sup>Optional</sup> <a name="notificationTopicsInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.notificationTopicsInput"></a>

```typescript
public readonly notificationTopicsInput: string[];
```

- *Type:* string[]

---

##### `outputsInput`<sup>Optional</sup> <a name="outputsInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.outputsInput"></a>

```typescript
public readonly outputsInput: IResolvable | OrchestrationStackV1Outputs[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a>[]

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `statusReasonInput`<sup>Optional</sup> <a name="statusReasonInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.statusReasonInput"></a>

```typescript
public readonly statusReasonInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `templateDescriptionInput`<sup>Optional</sup> <a name="templateDescriptionInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.templateDescriptionInput"></a>

```typescript
public readonly templateDescriptionInput: string;
```

- *Type:* string

---

##### `templateOptsInput`<sup>Optional</sup> <a name="templateOptsInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.templateOptsInput"></a>

```typescript
public readonly templateOptsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OrchestrationStackV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts">OrchestrationStackV1Timeouts</a>

---

##### `updatedTimeInput`<sup>Optional</sup> <a name="updatedTimeInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.updatedTimeInput"></a>

```typescript
public readonly updatedTimeInput: string;
```

- *Type:* string

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableRollback`<sup>Required</sup> <a name="disableRollback" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.disableRollback"></a>

```typescript
public readonly disableRollback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentOpts`<sup>Required</sup> <a name="environmentOpts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.environmentOpts"></a>

```typescript
public readonly environmentOpts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationTopics`<sup>Required</sup> <a name="notificationTopics" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.notificationTopics"></a>

```typescript
public readonly notificationTopics: string[];
```

- *Type:* string[]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `templateDescription`<sup>Required</sup> <a name="templateDescription" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.templateDescription"></a>

```typescript
public readonly templateDescription: string;
```

- *Type:* string

---

##### `templateOpts`<sup>Required</sup> <a name="templateOpts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.templateOpts"></a>

```typescript
public readonly templateOpts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `updatedTime`<sup>Required</sup> <a name="updatedTime" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.updatedTime"></a>

```typescript
public readonly updatedTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrchestrationStackV1Config <a name="OrchestrationStackV1Config" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.Initializer"></a>

```typescript
import { orchestrationStackV1 } from '@ithings/cdktf-provider-openstack'

const orchestrationStackV1Config: orchestrationStackV1.OrchestrationStackV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#name OrchestrationStackV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.templateOpts">templateOpts</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#template_opts OrchestrationStackV1#template_opts}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.capabilities">capabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#capabilities OrchestrationStackV1#capabilities}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.creationTime">creationTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#creation_time OrchestrationStackV1#creation_time}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#description OrchestrationStackV1#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.disableRollback">disableRollback</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#disable_rollback OrchestrationStackV1#disable_rollback}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.environmentOpts">environmentOpts</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#environment_opts OrchestrationStackV1#environment_opts}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#id OrchestrationStackV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.notificationTopics">notificationTopics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#notification_topics OrchestrationStackV1#notification_topics}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.outputs">outputs</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a>[]</code> | outputs block. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#parameters OrchestrationStackV1#parameters}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#region OrchestrationStackV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#status OrchestrationStackV1#status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.statusReason">statusReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#status_reason OrchestrationStackV1#status_reason}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#tags OrchestrationStackV1#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.templateDescription">templateDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#template_description OrchestrationStackV1#template_description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#timeout OrchestrationStackV1#timeout}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts">OrchestrationStackV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.updatedTime">updatedTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#updated_time OrchestrationStackV1#updated_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#name OrchestrationStackV1#name}.

---

##### `templateOpts`<sup>Required</sup> <a name="templateOpts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.templateOpts"></a>

```typescript
public readonly templateOpts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#template_opts OrchestrationStackV1#template_opts}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#capabilities OrchestrationStackV1#capabilities}.

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#creation_time OrchestrationStackV1#creation_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#description OrchestrationStackV1#description}.

---

##### `disableRollback`<sup>Optional</sup> <a name="disableRollback" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.disableRollback"></a>

```typescript
public readonly disableRollback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#disable_rollback OrchestrationStackV1#disable_rollback}.

---

##### `environmentOpts`<sup>Optional</sup> <a name="environmentOpts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.environmentOpts"></a>

```typescript
public readonly environmentOpts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#environment_opts OrchestrationStackV1#environment_opts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#id OrchestrationStackV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationTopics`<sup>Optional</sup> <a name="notificationTopics" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.notificationTopics"></a>

```typescript
public readonly notificationTopics: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#notification_topics OrchestrationStackV1#notification_topics}.

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.outputs"></a>

```typescript
public readonly outputs: IResolvable | OrchestrationStackV1Outputs[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a>[]

outputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#outputs OrchestrationStackV1#outputs}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#parameters OrchestrationStackV1#parameters}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#region OrchestrationStackV1#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#status OrchestrationStackV1#status}.

---

##### `statusReason`<sup>Optional</sup> <a name="statusReason" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#status_reason OrchestrationStackV1#status_reason}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#tags OrchestrationStackV1#tags}.

---

##### `templateDescription`<sup>Optional</sup> <a name="templateDescription" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.templateDescription"></a>

```typescript
public readonly templateDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#template_description OrchestrationStackV1#template_description}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#timeout OrchestrationStackV1#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: OrchestrationStackV1Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts">OrchestrationStackV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#timeouts OrchestrationStackV1#timeouts}

---

##### `updatedTime`<sup>Optional</sup> <a name="updatedTime" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Config.property.updatedTime"></a>

```typescript
public readonly updatedTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#updated_time OrchestrationStackV1#updated_time}.

---

### OrchestrationStackV1Outputs <a name="OrchestrationStackV1Outputs" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs.Initializer"></a>

```typescript
import { orchestrationStackV1 } from '@ithings/cdktf-provider-openstack'

const orchestrationStackV1Outputs: orchestrationStackV1.OrchestrationStackV1Outputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs.property.outputKey">outputKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#output_key OrchestrationStackV1#output_key}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs.property.outputValue">outputValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#output_value OrchestrationStackV1#output_value}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#description OrchestrationStackV1#description}. |

---

##### `outputKey`<sup>Required</sup> <a name="outputKey" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs.property.outputKey"></a>

```typescript
public readonly outputKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#output_key OrchestrationStackV1#output_key}.

---

##### `outputValue`<sup>Required</sup> <a name="outputValue" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs.property.outputValue"></a>

```typescript
public readonly outputValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#output_value OrchestrationStackV1#output_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#description OrchestrationStackV1#description}.

---

### OrchestrationStackV1Timeouts <a name="OrchestrationStackV1Timeouts" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts.Initializer"></a>

```typescript
import { orchestrationStackV1 } from '@ithings/cdktf-provider-openstack'

const orchestrationStackV1Timeouts: orchestrationStackV1.OrchestrationStackV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#create OrchestrationStackV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#delete OrchestrationStackV1#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#update OrchestrationStackV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#create OrchestrationStackV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#delete OrchestrationStackV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/orchestration_stack_v1#update OrchestrationStackV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrchestrationStackV1OutputsList <a name="OrchestrationStackV1OutputsList" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.Initializer"></a>

```typescript
import { orchestrationStackV1 } from '@ithings/cdktf-provider-openstack'

new orchestrationStackV1.OrchestrationStackV1OutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.get"></a>

```typescript
public get(index: number): OrchestrationStackV1OutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrchestrationStackV1Outputs[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a>[]

---


### OrchestrationStackV1OutputsOutputReference <a name="OrchestrationStackV1OutputsOutputReference" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.Initializer"></a>

```typescript
import { orchestrationStackV1 } from '@ithings/cdktf-provider-openstack'

new orchestrationStackV1.OrchestrationStackV1OutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.outputKeyInput">outputKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.outputValueInput">outputValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.outputKey">outputKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.outputValue">outputValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `outputKeyInput`<sup>Optional</sup> <a name="outputKeyInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.outputKeyInput"></a>

```typescript
public readonly outputKeyInput: string;
```

- *Type:* string

---

##### `outputValueInput`<sup>Optional</sup> <a name="outputValueInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.outputValueInput"></a>

```typescript
public readonly outputValueInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `outputKey`<sup>Required</sup> <a name="outputKey" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.outputKey"></a>

```typescript
public readonly outputKey: string;
```

- *Type:* string

---

##### `outputValue`<sup>Required</sup> <a name="outputValue" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.outputValue"></a>

```typescript
public readonly outputValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1OutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrchestrationStackV1Outputs;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Outputs">OrchestrationStackV1Outputs</a>

---


### OrchestrationStackV1TimeoutsOutputReference <a name="OrchestrationStackV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { orchestrationStackV1 } from '@ithings/cdktf-provider-openstack'

new orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts">OrchestrationStackV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrchestrationStackV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.orchestrationStackV1.OrchestrationStackV1Timeouts">OrchestrationStackV1Timeouts</a>

---



